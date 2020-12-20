import React from 'react';
import {
  EffectFunction,
  EffectReducer,
  EffectReducerExec,
  useEffectReducer,
} from 'use-effect-reducer';

import {
  transitionDurationInMs,
  wipeTransitionTotalTimeInMs,
} from '@/animation/page-transition';

// * TYPES
enum PageWiperStateNames {
  idle = 'idle',
  enter = 'enter',
  exit = 'exit',
}
type PageWiperState =
  | { status: PageWiperStateNames.idle }
  | { status: PageWiperStateNames.enter }
  | { status: PageWiperStateNames.exit };

export enum PageWiperActionNames {
  CLICK = 'CLICK',
  NEXT = 'NEXT',
}
type PageWiperActions =
  | { type: PageWiperActionNames.CLICK }
  | { type: PageWiperActionNames.NEXT };

type PageWiperEffects =
  | {
      type: 'enterTransition';
    }
  | {
      type: 'exitTransition';
    };

const initialPageWiperState: PageWiperState = {
  status: PageWiperStateNames.idle,
};

// * Effects
const enterTransitionEffect: EffectFunction<
  PageWiperState,
  PageWiperActions,
  PageWiperEffects
> = (_state, _effect, dispatch) => {
  // Locking page scroll
  document.body.classList.add('no-scroll');

  const enterTransition = window.setTimeout(() => {
    dispatch({ type: PageWiperActionNames.NEXT });
  }, wipeTransitionTotalTimeInMs);

  return () => window.clearTimeout(enterTransition);
};

const exitTransitionEffect: EffectFunction<
  PageWiperState,
  PageWiperActions,
  PageWiperEffects
> = (_state, _effect, dispatch) => {
  // Removing page scroll lock
  document.body.classList.remove('no-scroll');

  const exitTransition = window.setTimeout(() => {
    dispatch({ type: PageWiperActionNames.NEXT });
  }, transitionDurationInMs);

  return () => window.clearTimeout(exitTransition);
};

// * STATES
function handleIdleState(
  state: PageWiperState,
  action: PageWiperActions,
  exec: EffectReducerExec<PageWiperState, PageWiperActions, PageWiperEffects>,
): PageWiperState {
  switch (action.type) {
    case PageWiperActionNames.CLICK: {
      exec({ type: 'enterTransition' });
      return {
        ...state,
        status: PageWiperStateNames.enter,
      };
    }

    default: {
      return state;
    }
  }
}

function handleEnterState(
  state: PageWiperState,
  action: PageWiperActions,
  exec: EffectReducerExec<PageWiperState, PageWiperActions, PageWiperEffects>,
): PageWiperState {
  switch (action.type) {
    case PageWiperActionNames.NEXT: {
      exec({ type: 'exitTransition' });
      return {
        ...state,
        status: PageWiperStateNames.exit,
      };
    }

    default: {
      return state;
    }
  }
}

function handleExitState(
  state: PageWiperState,
  action: PageWiperActions,
): PageWiperState {
  switch (action.type) {
    case PageWiperActionNames.NEXT: {
      return {
        ...state,
        status: PageWiperStateNames.idle,
      };
    }

    default: {
      return state;
    }
  }
}

// * REDUCER
const pageWiperReducer: EffectReducer<
  PageWiperState,
  PageWiperActions,
  PageWiperEffects
> = (state, action, exec) => {
  switch (state.status) {
    case PageWiperStateNames.idle: {
      return handleIdleState(state, action, exec);
    }

    case PageWiperStateNames.enter: {
      return handleEnterState(state, action, exec);
    }

    case PageWiperStateNames.exit: {
      return handleExitState(state, action);
    }

    default:
      throw new Error('Unhandled state');
  }
};

interface PageWiperContextType {
  state: PageWiperState;
  dispatch: React.Dispatch<PageWiperActions>;
}

const PageWiperContext = React.createContext({} as PageWiperContextType);

function usePageWiper(): PageWiperContextType {
  const context = React.useContext(PageWiperContext);
  if (context === undefined) {
    throw new Error('usePageWiper must be used within a PageWiperProvider');
  }
  return context;
}

const PageWiperProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useEffectReducer(
    pageWiperReducer,
    initialPageWiperState,
    {
      enterTransition: enterTransitionEffect,
      exitTransition: exitTransitionEffect,
    },
  );

  const value = React.useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch],
  );
  return (
    <PageWiperContext.Provider value={value}>
      {children}
    </PageWiperContext.Provider>
  );
};

export { PageWiperProvider, usePageWiper };
