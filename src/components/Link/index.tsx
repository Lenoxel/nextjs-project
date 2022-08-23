import { ReactNode } from "react";
import NextLink from 'next/link';
import StyledLink from "../StyledLink";
import StyleSheetProps from "../../types/StyleSheetProps";

interface LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  styleSheet?: StyleSheetProps;
};

const Link = ({ children, href, ...props }: LinkProps) => {
  return (
    <NextLink href={href} passHref>
      <StyledLink {...props}>{children}</StyledLink>
    </NextLink>
  )
};

export default Link;