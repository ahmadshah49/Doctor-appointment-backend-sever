import { v2 as cloudinary } from "cloudinary";
import path from "path";
import fs from "fs";
import { GraphQLError } from "graphql";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const ImageUploader = async (imagePath: string) => {
  try {
    const mainDir = path.resolve(__dirname, "..", "assets", "uploads");
    // const mainDir = path.resolve();

    const fileName = path.join(mainDir, imagePath);

    if (!fs.existsSync(fileName)) {
      throw new GraphQLError(`File not found: ${fileName}`);
    }

    const result = await cloudinary.uploader.upload(fileName);

    return result.secure_url;
  } catch (error: any) {
    if (error.message.includes("Invalid")) {
      throw new GraphQLError(
        "Cloudinary credentials are invalid. Please check your API key and secret."
      );
    } else if (error.message.includes("File not found")) {
      throw new GraphQLError(`The file at path ${imagePath} does not exist.`);
    } else {
      throw new GraphQLError(
        "Failed to upload image to Cloudinary. Please try again."
      );
    }
  }
};
