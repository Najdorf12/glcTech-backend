import { v2 as cloudinary } from "cloudinary";


cloudinary.config({
  cloud_name: "najdorf",
  api_key: "866859882339311",
  api_secret: "hFYuImF7cM2bFzkbvrM0VM-Yz1w",
  secure: true,
});

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "glcTech",
  });
};

export const deleteImage = async (publicId) => {
  return await cloudinary.uploader.destroy(publicId);
};