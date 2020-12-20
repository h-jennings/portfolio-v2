import React from 'react';

export type DrawerState = { status: 'open' } | { status: 'closed' };
export type DrawerActions =
  | {
      type: 'OPEN';
    }
  | { type: 'CLOSE' };

const initialDrawerState: DrawerState = { status: 'closed' };

function drawerReducer(state: DrawerState, action: DrawerActions): DrawerState {
  switch (action.type) {
    case 'OPEN': {
      return {
        ...state,
        status: 'open',
      };
    }
    case 'CLOSE': {
      return {
        ...state,
        status: 'closed',
      };
    }
    default:
      throw new Error('impossible state');
  }
}
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
  const [state, dispatch] = React.useReducer(drawerReducer, initialDrawerState);
  const value = React.useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state],
  );
  return (
    <MenuDrawerContext.Provider value={value}>
      {children}
    </MenuDrawerContext.Provider>
  );
};

export { MenuDrawerProvider, useMenuDrawer };
