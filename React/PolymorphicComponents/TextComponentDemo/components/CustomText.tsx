import React from 'react';

type TextProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>; // with the code after & we make sure that correct props will be provided for the specific html tag. For example 'a' element can have href prop, but h2 cannot have href prop

// the default value of span here will make sure we cannot provide invalid props is we didn't specify 'as' prop. For example we provide href prop, but no as prop
const CustomText = <C extends React.ElementType = 'span'>({
  as,
  children,
  ...rest
}: TextProps<C>) => {
  const Tag = as || 'span';

  return <Tag {...rest}>{children}</Tag>;
};

export default CustomText;
