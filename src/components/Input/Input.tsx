import type { IFormValue } from "@components/Form/Form";
import type { InputHTMLAttributes } from "react";
import type { Path, UseFormRegister, ValidationRule } from "react-hook-form";

type OmitInputElement = Omit<InputHTMLAttributes<HTMLInputElement>, "required">;

interface InputProps extends OmitInputElement {
  className?: string;
  register: UseFormRegister<IFormValue>;
  name: Path<Omit<IFormValue, "upit">>;
  required?: boolean | ValidationRule<boolean>;
}

const Input = ({
  register,
  name,
  required,
  className,
  ...props
}: InputProps) => {
  return (
    <div className={className}>
      <input {...register(name, { required })} {...props} />
    </div>
  );
};

export default Input;
