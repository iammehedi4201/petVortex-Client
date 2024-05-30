type TRegisterUser = {
  name: string;
  contactNo: string;
  userName: string;
  email: string;
  password: string;
  profilePicture: string;
};

type TLoginUser = {
  userName?: string;
  email?: string;
  password?: string;
};
