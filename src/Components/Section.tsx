import { FC, ReactNode } from "react";

interface SectionProps {
  children: ReactNode,
  className: string
};

export const Section: FC<SectionProps> = ({ children, className }) => {
  return <div className={className}>
    { children }
  </div>
};
