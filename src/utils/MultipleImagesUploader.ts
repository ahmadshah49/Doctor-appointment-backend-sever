import { v2 as cloudinary } from "cloudinary";
import path from "path";
import fs from "fs";
import { GraphQLError } from "graphql";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const MultipleImagesUploader = async (imagePaths: string[]) => {
  try {
    const mainDir = path.resolve(__dirname, "..", "assets", "uploads");

    const uploadedImages: string[] = [];

    for (const imagePath of imagePaths) {
      const fileName = path.join(mainDir, imagePath);

      if (!fs.existsSync(fileName)) {
        throw new GraphQLError(`File not found: ${fileName}`);
      }

      const result = await cloudinary.uploader.upload(fileName);
      uploadedImages.push(result.secure_url);
    }

    return uploadedImages;
  } catch (error: any) {
    if (error.message.includes("Invalid")) {
      throw new GraphQLError(
        "Cloudinary credentials are invalid. Please check your API key and secret."
      );
    } else if (error.message.includes("File not found")) {
      throw new GraphQLError(`One or more files in the array do not exist.`);
    } else {
      throw new GraphQLError(
        "Failed to upload one or more images to Cloudinary. Please try again."
      );
    }
  }
};
