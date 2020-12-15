import React from 'react';

import {
  transitionDurationInMs,
  wipeTransitionTotalTimeInMs,
} from '@/animation/page-transition';

/* 
  !! CONSIDER GROUPING PAGE TRANSITIONS INTO ON REDUCER/CONTEXT
  * i.e. Initial loading, page wipe, etc.
*/

export enum PageWiperStateNames {
  idle = 'idle',
  enter = 'enter',
  exit = 'exit',
}
export type PageWiperState =
  | { status: PageWiperStateNames.idle }
  | { status: PageWiperStateNames.enter }
  | { status: PageWiperStateNames.exit };

export enum PageWiperActionNames {
  CLICK = 'CLICK',
  NEXT = 'NEXT',
}
export type PageWiperActions =
  | { type: PageWiperActionNames.CLICK }
  | { type: PageWiperActionNames.NEXT };

const initialPageWiperState: PageWiperState = {
  status: PageWiperStateNames.idle,
};

function handleIdleState(
  state: PageWiperState,
  action: PageWiperActions,
): PageWiperState {
  switch (action.type) {
    case PageWiperActionNames.CLICK: {
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
): PageWiperState {
  switch (action.type) {
    case PageWiperActionNames.NEXT: {
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

function pageWiperReducer(
  state: PageWiperState,
  action: PageWiperActions,
): PageWiperState {
  switch (state.status) {
    case PageWiperStateNames.idle: {
      return handleIdleState(state, action);
    }

    case PageWiperStateNames.enter: {
      return handleEnterState(state, action);
    }

    case PageWiperStateNames.exit: {
      return handleExitState(state, action);
    }

    default:
      throw new Error('Unhandled state');
  }
}

interface PageWiperContextType {
  state: PageWiperState;
  dispatch: React.Dispatch<PageWiperActions>;
}

const PageWiperContext = React.createContext({} as PageWiperContextType);

function usePageWiper(): PageWiperContextType {
  const context = React.useContext(PageWiperContext);
  if (context === undefined) {
    throw new Error('usePageWiper must be used within a ');
  }
  return context;
}

export function usePageWiperEffects({
  state,
  dispatch,
}: PageWiperContextType): void {
  React.useEffect(() => {
    let enterTransition: number;
    let exitTransition: number;

    switch (state.status) {
      case PageWiperStateNames.enter: {
        // Locking page scroll
        document.body.classList.add('no-scroll');
        // * Transition to exit state (with pause)
        enterTransition = window.setTimeout(() => {
          dispatch({ type: PageWiperActionNames.NEXT });
        }, wipeTransitionTotalTimeInMs);
        break;
      }
      case PageWiperStateNames.exit: {
        // * Transition back to idle state
        exitTransition = window.setTimeout(() => {
          dispatch({ type: PageWiperActionNames.NEXT });
          // Removing page scroll lock
          document.body.classList.remove('no-scroll');
        }, transitionDurationInMs);
        break;
      }

      default:
        break;
    }

    () => {
      window.clearTimeout(enterTransition);
      window.clearTimeout(exitTransition);
    };
  }, [state.status, dispatch]);
}
const PageWiperProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    pageWiperReducer,
    initialPageWiperState,
  );
  usePageWiperEffects({ state, dispatch });
  return (
    <PageWiperContext.Provider value={{ state, dispatch }}>
      {children}
    </PageWiperContext.Provider>
  );
};

export { PageWiperProvider, usePageWiper };
