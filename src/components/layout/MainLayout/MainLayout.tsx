export const MainLayout: React.FC = ({ children }) => {
  return (
    <div id='site-layout'>
      <nav>navigation</nav>
      {children}
      <footer>footer</footer>
    </div>
  );
};
