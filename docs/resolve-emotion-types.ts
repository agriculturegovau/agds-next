/**
 * This is here because Storybook depends on emotion 10. Emotion 10 declares it's
 * types in the global space which means those child-dependency types leak into the
 * local type space and override the local types (ie. those from emotion 11).
 * The existence of this file causes the next.js type checker to use those global
 * Emotion 10 types. This is not "good" but does work for what we're doing here.
 * If you don't have storybook in your repo you shouldn't need this file.
 */

import type {} from '@emotion/core';
