import { ReactNode } from "react";

interface TitleProps {
    children: ReactNode;
    as: React.ElementType;
};
  
const Title = ({ children, as }: TitleProps) => {
    const Tag = as;
    return (
      <>
        <Tag>
          {children}
        </Tag>
        <style jsx>{`
          ${Tag} {
            color: red;
          }
        `}</style>
      </>
    );
};

export default Title;