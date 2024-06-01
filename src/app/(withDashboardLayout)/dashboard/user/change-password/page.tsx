import PForm from "@/components/Forms/PForm";
import PInput from "@/components/Forms/PInput";

const ChangePasswordPage = () => {
  const hanldeChangePassword = () => {};

  return (
    <section className="bg-gray-50 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flowbite
        </a>
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md  dark:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Change Password
          </h2>
          <PForm onSubmit={hanldeChangePassword}>
            <div>
              {" "}
              <PInput
                name="password"
                fullWidth={true}
                label="Password*"
                placeholder="Enter Your Password"
                type="password"
              />
            </div>
            <div>
              {" "}
              <PInput
                name="password"
                fullWidth={true}
                label="Password*"
                placeholder="Enter Your Password"
                type="password"
              />
            </div>
            <div>
              {" "}
              <PInput
                name="password"
                fullWidth={true}
                label="Password*"
                placeholder="Enter Your Password"
                type="password"
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5"></div>
              <div className="ml-3 text-sm">
                <label className="font-light text-gray-500 dark:text-gray-300">
                  I accept the{" "}
                  <a
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Reset passwod
            </button>
          </PForm>
        </div>
      </div>
    </section>
  );
};

export default ChangePasswordPage;
