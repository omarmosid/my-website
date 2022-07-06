import React, { ReactNode } from "react";

type PostLayoutProps = {
  children: ReactNode;
};

const PostLayout: React.FC<PostLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export { PostLayout };
