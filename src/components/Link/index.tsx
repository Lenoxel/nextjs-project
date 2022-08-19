import { ReactNode } from "react";
import NextLink from 'next/link';
import StyledLink from "../StyledLink";

interface LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
};

const Link = ({ children, href, ...props }: LinkProps) => {
  return (
    <NextLink href={href} passHref>
      <StyledLink {...props}>{children}</StyledLink>
    </NextLink>
  )
};

export default Link;