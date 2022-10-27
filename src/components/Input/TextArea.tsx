import type { IFormValue } from "@components/Form/Form";
import type { TextareaHTMLAttributes } from "react";
import type { Path, UseFormRegister, ValidationRule } from "react-hook-form";

type OmitTextAreaElement = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "required"
>;

interface TextAreaProps extends OmitTextAreaElement {
  className?: string;
  register: UseFormRegister<IFormValue>;
  name: Path<Pick<IFormValue, "upit">>;
  required?: boolean | ValidationRule<boolean>;
}

const TextArea = ({
  register,
  name,
  required,
  className,
  ...props
}: TextAreaProps) => {
  return (
    <div className={className}>
      <textarea {...register(name, { required })} {...props} />
    </div>
  );
};

export default TextArea;
