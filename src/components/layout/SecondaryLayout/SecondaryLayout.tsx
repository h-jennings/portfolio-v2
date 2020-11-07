export const SecondaryLayout: React.FC = ({ children }) => {
  return (
    <div id='site-layout-secondary'>
      <nav>secondary navigation</nav>
      {children}
      <footer>footer</footer>
    </div>
  );
};
