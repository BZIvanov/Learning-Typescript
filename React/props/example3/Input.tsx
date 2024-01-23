import { ComponentPropsWithoutRef, type FC } from 'react';

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<'input'>;

const Input: FC<InputProps> = ({ id, label, ...rest }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
    </div>
  );
};

export default Input;
