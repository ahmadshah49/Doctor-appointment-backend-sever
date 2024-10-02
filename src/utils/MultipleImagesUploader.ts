import { v2 as cloudinary } from "cloudinary";
import path from "path";
import fs from "fs";
import { GraphQLError } from "graphql";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Function to upload multiple images to Cloudinary
export const MultipleImagesUploader = async (imagePaths: string[]) => {
  try {
    const mainDir = path.resolve(__dirname, "..", "assets", "uploads");

    const uploadedImages: string[] = [];

    for (const imagePath of imagePaths) {
      const fileName = path.join(mainDir, imagePath);
      console.log("Uploading File:", fileName);

      if (!fs.existsSync(fileName)) {
        throw new GraphQLError(`File not found: ${fileName}`);
      }

      const result = await cloudinary.uploader.upload(fileName);
      uploadedImages.push(result.secure_url);
    }

    return uploadedImages;
  } catch (error: any) {
    if (error.message.includes("Invalid")) {
      console.error("Cloudinary configuration error:", error);
      throw new GraphQLError(
        "Cloudinary credentials are invalid. Please check your API key and secret."
      );
    } else if (error.message.includes("File not found")) {
      console.error("File not found:", error);
      throw new GraphQLError(`One or more files in the array do not exist.`);
    } else {
      console.error("Error uploading image(s):", error);
      throw new GraphQLError(
        "Failed to upload one or more images to Cloudinary. Please try again."
      );
    }
  }
};
