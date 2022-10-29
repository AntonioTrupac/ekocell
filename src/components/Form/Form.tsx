import Input from "@components/Input/Input";
import TextArea from "@components/Input/TextArea";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

export type IFormValue = {
  ime: string;
  prezime: string;
  email: string;
  telefon: string;
  upit: string;
};

const Form = () => {
  const { register, handleSubmit } = useForm<IFormValue>({
    defaultValues: {
      ime: "",
      prezime: "",
      email: "",
      telefon: "",
      upit: "",
    },
  });

  const onSubmit: SubmitHandler<IFormValue> = (data, e?: any) => {
    e?.preventDefault();
    alert(JSON.stringify(data));
    e?.target.reset();
  };

  return (
    <div className="mt-10">
      <h2 className="font-medium text-2xl">
        Ispunite formu za detaljnije upite
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          className="flex flex-col mt-6"
          name="ime"
          placeholder="Ime"
          register={register}
        />

        <Input
          className="flex flex-col mt-3"
          name="prezime"
          placeholder="Prezime"
          register={register}
        />

        <Input
          className="flex flex-col mt-3"
          type="email"
          name="email"
          placeholder="Email"
          register={register}
        />

        <Input
          className="flex flex-col mt-3"
          type="tel"
          name="telefon"
          placeholder="Telefon"
          register={register}
        />

        <TextArea
          className="flex flex-col mt-3"
          name="upit"
          placeholder="Upit"
          register={register}
        />

        <button type="submit">Pošaljite</button>
      </form>
    </div>
  );
};

export default Form;
