import { type ReactNode } from 'react';

type EmphasizedTextProps = {
  children: ReactNode;
};

const EmphasizedText = ({ children }: EmphasizedTextProps) => {
  return <em style={{ color: 'green' }}>{children}</em>;
};

export default EmphasizedText;
