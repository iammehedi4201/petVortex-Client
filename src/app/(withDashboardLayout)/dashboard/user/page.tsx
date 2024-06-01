"use client";
import PForm from "@/components/Forms/PForm";
import PInput from "@/components/Forms/PInput";
import { Button } from "@mui/material";
import Image from "next/image";

const page = () => {
  const handleUpdateProfile = (data: any) => {};

  return (
    <section className="py-10 my-auto">
      <div className="lg:w-[100%] md:w-[100%] xs:w-[96%] mx-auto flex gap-4 ">
        <div className="lg:w-[100%] md:w-[100%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center ">
          <div className="">
            <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 text-black">
              Profile
            </h1>
            <PForm onSubmit={handleUpdateProfile}>
              <div className="flex flex-col">
                {/* <!-- Cover Image --> */}
                <Image
                  width={1080}
                  height={720}
                  src="https://i.ibb.co/HKCQZCz/396365569-3668623856701108-5380981700298228761-n.jpg"
                  alt="User Cover"
                  className="w-full xl:h-[30rem] lg:h-[20rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]"
                />

                {/* <!-- Profile Image --> */}
                <div className="sm:w-[80%] xs:w-[90%] mx-auto flex">
                  <Image
                    width={1080}
                    height={720}
                    src="https://i.ibb.co/wr4zkmV/281239749-3270015616561936-7006385574087797627-n-1.jpg"
                    alt="User Profile"
                    className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem]  relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]"
                  />

                  {/* <!-- FullName --> */}
                  <h1 className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-black  lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif font-bold">
                    Samuel Abera
                  </h1>
                </div>
              </div>

              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full  mb-4 mt-6">
                  <PInput
                    name="name"
                    label="Name"
                    type="text"
                    placeholder="First Name"
                    fullWidth={true}
                    size="medium"
                    sx={{}}
                  />
                </div>
                <div className="w-full  mb-4 lg:mt-6">
                  <PInput
                    name="userName"
                    label="userName"
                    type="text"
                    placeholder="userName"
                    fullWidth={true}
                    size="medium"
                  />
                </div>
              </div>

              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full">
                  <PInput
                    name="email"
                    label="Email"
                    type="text"
                    placeholder="Email Address"
                    fullWidth={true}
                    size="medium"
                  />
                </div>
                <div className="w-full">
                  <PInput
                    name="contactNo"
                    label="Contact No"
                    type="text"
                    placeholder="Contact No"
                    fullWidth={true}
                    size="medium"
                  />
                </div>
              </div>
              <div className="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                <Button type="submit" className="w-full p-4">
                  Submit
                </Button>
              </div>
            </PForm>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
