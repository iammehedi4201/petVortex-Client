import axios from "axios";
import { FieldValues } from "react-hook-form";

type TUploadImgToIMGBBResponse = {
  imgUrls: string[];
  deleteImgUrls: string[];
};

export const uploadImgToIMGBB = async (
  files: FieldValues
): Promise<TUploadImgToIMGBBResponse> => {
  //: Image Hosting URL
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_UPLOAD_TOKEN}`;

  let imgUrls: string[] = [];
  let deleteImgUrls: string[] = [];

  if (files?.length > 0) {
    console.log("files", files);

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(`image`, files[i]);
      const imgHostResponse = await axios.post(img_hosting_url, formData);
      console.log("imgHostResponse", imgHostResponse?.data?.data);
      imgUrls.push(imgHostResponse?.data?.data?.display_url);
      deleteImgUrls.push(imgHostResponse?.data?.data?.delete_url);
    }
  }

  return { imgUrls, deleteImgUrls };
};
