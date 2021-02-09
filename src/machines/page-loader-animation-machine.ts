import { Machine, sendParent } from 'xstate';

export interface PageLoaderAnimationSchema {
  states: {
    idle: any;
    enter: any;
    progress: any;
    wipe: any;
    expand: any;
    complete: any;
  };
}

export const tweenTiming: Record<
  keyof PageLoaderAnimationSchema['states'],
  number
> = {
  idle: 0,
  enter: 500,
  progress: 2000,
  wipe: 700,
  expand: 500,
  complete: 0,
};

export type PageLoaderAnimationContext = any;

export type PageLoaderAnimationEvents = { type: 'INIT' };

export const pageLoaderAnimationMachine = Machine<
  PageLoaderAnimationContext,
  PageLoaderAnimationSchema,
  PageLoaderAnimationEvents
>({
  id: 'initial-page-loader-machine',
  initial: 'idle',
  states: {
    idle: {
      entry: sendParent(() => ({
        type: 'ANIMATION_UPDATED',
        animationState: 'idle',
      })),
      on: {
        INIT: 'enter',
      },
    },
    enter: {
      entry: sendParent(() => ({
        type: 'ANIMATION_UPDATED',
        animationState: 'enter',
      })),
      after: {
        [tweenTiming.enter]: 'progress',
      },
    },
    progress: {
      entry: sendParent(() => ({
        type: 'ANIMATION_UPDATED',
        animationState: 'progress',
      })),
      after: {
        [tweenTiming.progress]: 'wipe',
      },
    },
    wipe: {
      entry: sendParent(() => ({
        type: 'ANIMATION_UPDATED',
        animationState: 'wipe',
      })),
      after: {
        [tweenTiming.wipe]: 'expand',
      },
    },
    expand: {
      entry: sendParent(() => ({
        type: 'ANIMATION_UPDATED',
        animationState: 'expand',
      })),
      after: {
        [tweenTiming.expand]: 'complete',
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
