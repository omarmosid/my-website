import React, { ReactNode } from "react"

type PlainLayoutProps = {
    children: ReactNode;
};

const PlainLayout: React.FC<PlainLayoutProps> = ({
    children
}) => {
  return (
    <>
      {children}
    </>
  )
}

export { PlainLayout };