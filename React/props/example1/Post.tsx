import { type FC, type ReactNode } from 'react';

interface PostProps {
  title: string;
  description: string;
  children: ReactNode;
}

const Post: FC<PostProps> = ({ title, description, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>

      <div>{children}</div>
    </div>
  );
};

export default Post;
