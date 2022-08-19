import React, { ReactNode } from "react";

const StyledLink = React.forwardRef<any, any>(({ onClick, href, children }, ref): any => {
    return (
      <a href={href} onClick={onClick} ref={ref} style={{ color: 'red' }}>
        {children}
      </a>
    );
});

StyledLink.displayName = 'StyledLink';
  
export default StyledLink;