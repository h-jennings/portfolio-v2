import { Machine } from 'xstate';

export interface PageLoadingAnimationSchema {
  states: {
    animating: any;
    complete: any;
  };
}

export type PageLoadingAnimationLoadingContext = any;

export type PageLoadingAnimationEvents = { type: 'INIT' };

export const pageLoadingAnimationMachine = Machine<
  PageLoadingAnimationLoadingContext,
  PageLoadingAnimationSchema,
  PageLoadingAnimationEvents
>({
  id: 'initial-page-loading-machine',
  initial: 'animating',
  states: {
    animating: {
      after: {
        2000: 'complete',
      },
    },
    complete: {
      type: 'final',
    },
  },
});
