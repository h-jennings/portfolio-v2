import React from 'react';
import { Machine } from 'xstate';
import { pageLoadingAnimationMachine } from './page-loading-animation-machine';

interface InitialPageLoadingSchema {
  states: {
    idle: any;
    loading: any;
    loaded: any;
  };
}

type InitialPageLoadingContext = any;

type InitialPageLoadingEvents = { type: 'INIT' };

export const initialPageLoadingMachine = Machine<
  InitialPageLoadingContext,
  InitialPageLoadingSchema,
  InitialPageLoadingEvents
>({
  id: 'initial-page-loading-machine',
  initial: 'idle',
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
    },
    loaded: {
      type: 'final',
    },
  },
});

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
