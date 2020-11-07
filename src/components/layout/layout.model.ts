import { NextPage } from 'next';

// TODO: Figure out how to specify specific return type and differentiate
// one layout from another
/*
export type PageWithMainLayout = NextPage & {
  getLayout: (page: any) => JSX.Element; // Specific component!
};
*/
export type PageWithLayoutType = NextPage & {
  getLayout: (page: any) => JSX.Element;
};
