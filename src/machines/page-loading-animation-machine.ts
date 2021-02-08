import { Machine, sendParent } from 'xstate';

export interface PageLoadingAnimationSchema {
  states: {
    idle: any;
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
    idle: {
      entry: sendParent(() => ({
        type: 'ANIMATION_UPDATED',
        animationState: 'idle',
      })),
      on: {
        INIT: 'animating',
      },
    },
    animating: {
      entry: sendParent(() => ({
        type: 'ANIMATION_UPDATED',
        animationState: 'animating',
      })),
      after: {
        2000: 'complete',
      },
    },
    complete: {
      entry: sendParent(() => ({
        type: 'ANIMATION_UPDATED',
        animationState: 'complete',
      })),
      type: 'final',
    },
  },
});
