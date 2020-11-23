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
  drawerState: DrawerState;
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

export { drawerReducer, initialDrawerState, MenuDrawerContext, useMenuDrawer };
