import { FC, ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="flex-container">
      { children }
    </div>
  )
}