import React, { ReactNode } from "react"

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayout: React.FC<BaseLayoutProps> = ({
  children
}) => {
  return (
    <>
      {children}
    </>
  )
}

export { BaseLayout };