import React from 'react';

import { wipeTransitionDuration } from '@/animation/page-transition';

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

function handleIdleStates(
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

function handleEnterStates(
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

function handleExitStates(
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
      return handleIdleStates(state, action);
    }

    case PageWiperStateNames.enter: {
      return handleEnterStates(state, action);
    }

    case PageWiperStateNames.exit: {
      return handleExitStates(state, action);
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
      case PageWiperStateNames.idle: {
        console.log('idle state');
        break;
      }
      case PageWiperStateNames.enter: {
        console.log('Enter state');

        // * Transition after 500ms second
        enterTransition = window.setTimeout(() => {
          dispatch({ type: PageWiperActionNames.NEXT });
        }, wipeTransitionDuration * 1000 * 2);
        break;
      }
      case PageWiperStateNames.exit: {
        console.log('In exit state');

        // * Transition after 500ms second
        exitTransition = window.setTimeout(() => {
          dispatch({ type: PageWiperActionNames.NEXT });
        }, wipeTransitionDuration * 1000);
        break;
      }

      default:
        throw new Error('unhandled state change');
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
