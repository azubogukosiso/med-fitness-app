import { convertToBase64 } from "./convertToBase64";
import { v2 as cloudinary } from "cloudinary";

export const cloudinaryImageUpload = async (
  image: Express.Multer.File,
  folderName: string
) => {
  const base64Image: string = convertToBase64(image);

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!,
  });

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      base64Image,
      {
        overwrite: true,
        invalidate: true,
        resource_type: "auto",
        folder: folderName,
      },
      (error, result) => {
        if (result) {
          resolve(result.secure_url);
        } else {
          reject(error);
        }
      }
    );
  });
};
