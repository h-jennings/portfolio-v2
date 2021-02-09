import { assign, Machine, send } from 'xstate';
import {
  pageLoaderAnimationMachine,
  PageLoaderAnimationSchema,
} from './page-loader-animation-machine';

interface InitialPageLoaderSchema {
  states: {
    idle: any;
    loading: any;
    loaded: any;
  };
}

interface InitialPageLoaderContext {
  animationState: keyof PageLoaderAnimationSchema['states'];
}

type InitialPageLoaderEvents = { type: 'INIT' } | { type: 'ANIMATION_UPDATED' };

export const initialPageLoaderMachine = Machine<
  InitialPageLoaderContext,
  InitialPageLoaderSchema,
  InitialPageLoaderEvents
>(
  {
    id: 'initial-page-loader-machine',
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
          id: 'loaderAnimation',
          src: pageLoaderAnimationMachine,
          onDone: 'loaded',
        },
        entry: send('INIT', { to: 'loaderAnimation' }),
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
