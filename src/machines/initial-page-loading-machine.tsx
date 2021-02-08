import React from 'react';
import { assign, Machine, send } from 'xstate';
import {
  pageLoadingAnimationMachine,
  PageLoadingAnimationSchema,
} from './page-loading-animation-machine';

interface InitialPageLoadingSchema {
  states: {
    idle: any;
    loading: any;
    loaded: any;
  };
}

export interface InitialPageLoadingContext {
  animationState: keyof PageLoadingAnimationSchema['states'];
}

type InitialPageLoadingEvents =
  | { type: 'INIT' }
  | { type: 'ANIMATION_UPDATED' };

export const initialPageLoadingMachine = Machine<
  InitialPageLoadingContext,
  InitialPageLoadingSchema,
  InitialPageLoadingEvents
>(
  {
    id: 'initial-page-loading-machine',
    initial: 'idle',
    context: {
      animationState: 'idle',
    },
    states: {
      idle: {
        on: {
          INIT: 'loading',
        },
      },
      loading: {
        invoke: {
          id: 'loadingAnimation',
          src: pageLoadingAnimationMachine,
          onDone: 'loaded',
        },
        entry: send('INIT', { to: 'loadingAnimation' }),
        on: {
          ANIMATION_UPDATED: {
            actions: ['updateAnimationState'],
          },
        },
      },
      loaded: {
        type: 'final',
        on: {
          ANIMATION_UPDATED: {
            actions: ['updateAnimationState'],
          },
        },
      },
    },
  },
  {
    actions: {
      updateAnimationState: assign({
        animationState: (_context, event: any) => {
          return event?.animationState;
        },
      }),
    },
  },
);

// * Hooks
export const InitialPageLoadingMachineContext = React.createContext(
  null as any,
);

export const useInitialPageLoadingMachine = (): any => {
  const context = React.useContext(InitialPageLoadingMachineContext);
  if (context === undefined) {
    throw new Error(
      'useInitialPageMachine must be used within a InitialPageLoadingMachineProvider',
    );
  }
  return context;
};
