/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
export const LinkWithPageTransition: React.FC = ({ children }) => {
  const handleLinkClick = () => {
    // Set states
    /*
     * STATES
     1. IDLE
     2. ENTER
     3. EXIT

     * EVENTS
     1. CLICK
     2. NEXT
     */
  };
  return <a onClick={handleLinkClick}>{children}</a>;
};
