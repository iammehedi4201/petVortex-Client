import { Box } from "@mui/material";
import Image from "next/image";

const loading = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Box>
        <Image
          src="https://themebeyond.com/pre/petco-prev/petco-live/img/preloader.gif"
          width={400}
          height={400}
          alt="dog_Loader"
        />
      </Box>
    </div>
  );
};

export default loading;
