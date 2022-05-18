import React from 'react';

const EmphasizedText = ({ children }: { children: React.ReactNode }) => {
  return <em style={{ color: 'green' }}>{children}</em>;
};

export default EmphasizedText;
