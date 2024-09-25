import { v2 as cloudinary } from "cloudinary";
import path from "path";
import fs from "fs";
import { GraphQLError } from "graphql";

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME, // Make sure these environment variables are correctly set
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Function to upload image to Cloudinary with improved error handling
export const ImageUploader = async (imagePath: string) => {
  try {
    // const mainDir = path.dirname(require.main.filename);
    const mainDir = path.resolve(__dirname, "..", "assets", "uploads");

    const fileName = path.join(mainDir, imagePath);
    console.log("FileName", fileName);

    if (!fs.existsSync(fileName)) {
      throw new GraphQLError(`File not found: ${fileName}`);
    }

    const result = await cloudinary.uploader.upload(fileName);

    return result.secure_url;
  } catch (error: any) {
    if (error.message.includes("Invalid")) {
      console.error("Cloudinary configuration error:", error);
      throw new GraphQLError(
        "Cloudinary credentials are invalid. Please check your API key and secret."
      );
    } else if (error.message.includes("File not found")) {
      console.error("File not found:", error);
      throw new GraphQLError(`The file at path ${imagePath} does not exist.`);
    } else {
      console.error("Error uploading image:", error);
      throw new GraphQLError(
        "Failed to upload image to Cloudinary. Please try again."
      );
    }
  }
};
