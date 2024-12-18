import { type ReactNode } from "react";

interface PostProps {
  title: string;
  description: string;
  children: ReactNode;
}

const Post = ({ title, description, children }: PostProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>

      <div>{children}</div>
    </div>
  );
};

export default Post;
