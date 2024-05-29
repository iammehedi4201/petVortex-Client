import { resolve } from "path";
import {
    FieldValues,
    FormProvider,
    SubmitHandler,
    useForm
} from "react-hook-form";

type TFormConfig = {
  resolver?: any;
  defaultValues?: Record<string, any>;
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
  const formConfig: TFormConfig = {};

  if (resolver) {
    formConfig["resolver"] = resolve;
  }

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formConfig);

  const { handleSubmit, reset } = methods;

  const Submit: SubmitHandler<FieldValues> = (data) => {
    console.log("From Provider", data);
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
