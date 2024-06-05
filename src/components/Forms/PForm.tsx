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

const PForm: React.FC<TPFromProps> = ({
  children,
  onSubmit,
  resolver,
  defaultValues,
  className,
}) => {
  const config: TFormConfig = {};

  if (resolver) {
    config.resolver = resolver;
  }

  if (defaultValues) {
    config.defaultValues = defaultValues;
  }

  const methods = useForm(config);

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
