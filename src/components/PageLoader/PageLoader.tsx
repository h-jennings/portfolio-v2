export const PageLoader: React.FC<{ current: any }> = ({ current }) => {
  return (
    <div style={{ top: 0, position: 'absolute', left: 0, zIndex: 999 }}>
      {current.value}
    </div>
  );
};
