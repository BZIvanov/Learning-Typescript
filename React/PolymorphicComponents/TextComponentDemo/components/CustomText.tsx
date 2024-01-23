import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from 'react';

type TextProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>; // with the code after & we make sure that correct props will be provided for the specific html tag. For example 'a' element can have href prop, but h2 cannot have href prop

// the default value of span here will make sure we cannot provide invalid props is we didn't specify 'as' prop. For example we provide href prop, but no as prop
const CustomText = <C extends ElementType = 'span'>({
  as,
  children,
  ...rest
}: TextProps<C>) => {
  const Tag = as || 'span';

  return <Tag {...rest}>{children}</Tag>;
};

export default CustomText;
