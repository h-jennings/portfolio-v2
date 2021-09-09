import { config, styled } from 'stitches.config';

const { fontSizes, lineHeights } = config.theme;

type FontSizeKeys = keyof typeof fontSizes;

type FzVariantObj = {
  fontSize: FontSizeKeys;
};

const sizeVariants: Record<FontSizeKeys, FzVariantObj> = Object.keys(
  fontSizes,
).reduce((acc, key) => {
  Object.assign(acc, { [key]: { fontSize: `$${key}` } });
  return acc;
}, {} as Record<FontSizeKeys, FzVariantObj>);

type LineHeightKeys = keyof typeof lineHeights;

type LhVariantObj = {
  lineHeight: LineHeightKeys;
};

const leadingVariants: Record<LineHeightKeys, LhVariantObj> = Object.keys(
  lineHeights,
).reduce((acc, key) => {
  Object.assign(acc, { [key]: { lineHeight: `$${key}` } });
  return acc;
}, {} as Record<LineHeightKeys, LhVariantObj>);

export const Text = styled('span', {
  color: '$text1',
  variants: {
    size: {
      ...sizeVariants,
    },
    leading: {
      ...leadingVariants,
    },
    color: {
      1: {
        color: '$text1',
      },
      2: {
        color: '$text2',
      },
      3: {
        color: '$text3',
      },
    },
  },
  defaultVariants: {
    size: 'sm',
    leading: 'default',
  },
});
