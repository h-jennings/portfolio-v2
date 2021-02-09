import React from 'react';

export const InitialPageLoaderReactContext = React.createContext(null as any);

export const useInitialPageLoader = (): any => {
  const context = React.useContext(InitialPageLoaderReactContext);

  if (context === undefined) {
    throw new Error(
      'useInitialPageLoader must be used within a InitialPageLoaderProvider',
    );
  }

  return context;
};
interface InitialPageLoaderProviderProps {
  machine: any;
}
export const InitialPageLoaderProvider: React.FC<InitialPageLoaderProviderProps> = ({
  children,
  machine,
}) => {
  return (
    <InitialPageLoaderReactContext.Provider value={machine}>
      {children}
    </InitialPageLoaderReactContext.Provider>
  );
};
