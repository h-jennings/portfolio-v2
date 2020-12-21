import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import React from 'react';
import {
  EffectFunction,
  EffectReducer,
  EffectReducerExec,
  useEffectReducer,
} from 'use-effect-reducer';

export type DrawerState = { status: 'open' } | { status: 'closed' };
export type DrawerActions =
  | {
      type: 'OPEN';
    }
  | { type: 'CLOSE' };
type DrawerEffects =
  | {
      type: 'bodyLock';
    }
  | {
      type: 'bodyUnlock';
    };

const initialDrawerState: DrawerState = { status: 'closed' };

const lockBodyOnOpen: EffectFunction<
  DrawerState,
  DrawerActions,
  DrawerEffects
> = () => {
  disableBodyScroll(
    document.querySelector('[data-menu-drawer]') as HTMLDivElement,
  );
};

const unlockBodyOnClose: EffectFunction<
  DrawerState,
  DrawerActions,
  DrawerEffects
> = () => {
  clearAllBodyScrollLocks();
};

const handleOpenState = (
  state: DrawerState,
  action: DrawerActions,
  exec: EffectReducerExec<DrawerState, DrawerActions, DrawerEffects>,
): DrawerState => {
  switch (action.type) {
    case 'CLOSE': {
      exec({ type: 'bodyUnlock' });

      return {
        ...state,
        status: 'closed',
      };
    }

    default:
      return state;
  }
};

const handleClosedState = (
  state: DrawerState,
  action: DrawerActions,
  exec: EffectReducerExec<DrawerState, DrawerActions, DrawerEffects>,
): DrawerState => {
  switch (action.type) {
    case 'OPEN': {
      exec({ type: 'bodyLock' });

      return {
        ...state,
        status: 'open',
      };
    }

    default:
      return state;
  }
};

const drawerReducer: EffectReducer<
  DrawerState,
  DrawerActions,
  DrawerEffects
> = (state, action, exec) => {
  switch (state.status) {
    case 'open': {
      return handleOpenState(state, action, exec);
    }

    case 'closed': {
      return handleClosedState(state, action, exec);
    }

    default:
      throw new Error('Unhandled state');
  }
};

interface MenuDrawerContextType {
  state: DrawerState;
  dispatch: React.Dispatch<DrawerActions>;
}

const MenuDrawerContext = React.createContext({} as MenuDrawerContextType);

function useMenuDrawer(): MenuDrawerContextType {
  const context = React.useContext(MenuDrawerContext);
  if (context === undefined) {
    throw new Error('useMenuDrawer must be used within a MenuDrawerProvider');
  }
  return context;
}

const MenuDrawerProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useEffectReducer(
    drawerReducer,
    initialDrawerState,
    {
      bodyLock: lockBodyOnOpen,
      bodyUnlock: unlockBodyOnClose,
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
    <MenuDrawerContext.Provider value={value}>
      {children}
    </MenuDrawerContext.Provider>
  );
};

export { MenuDrawerProvider, useMenuDrawer };
