import { getUserInfo, removeUser } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();

  return (
    <>
      {userInfo?.email ? (
        <Button
          onClick={() => {
            removeUser();
            router.push("/");
            router.refresh();
          }}
          size="small"
        >
          Logout
        </Button>
      ) : (
        <Link href="/login" type="button">
          <Button size="small">Login</Button>{" "}
        </Link>
      )}
    </>
  );
};

export default AuthButton;
