import { resolve } from "path";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  resolver?: any;
  defaultValues?: any;
};

type TPFromProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  className?: string;
} & TFormConfig;

const PForm = ({
  children,
  onSubmit,
  resolver,
  defaultValues,
  className,
}: TPFromProps) => {
  const methods = useForm({ resolver, defaultValues });

  const { handleSubmit, reset } = methods;

  const Submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={handleSubmit(Submit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default PForm;
