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

export { drawerReducer, initialDrawerState };
