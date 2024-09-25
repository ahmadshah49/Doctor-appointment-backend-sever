"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUploader = void 0;
const cloudinary_1 = require("cloudinary");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const graphql_1 = require("graphql");
// Cloudinary configuration
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUD_NAME, // Make sure these environment variables are correctly set
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});
// Function to upload image to Cloudinary with improved error handling
const ImageUploader = async (imagePath) => {
    try {
        // const mainDir = path.dirname(require.main.filename);
        const mainDir = path_1.default.resolve(__dirname, "..", "assets", "uploads");
        const fileName = path_1.default.join(mainDir, imagePath);
        console.log("FileName", fileName);
        if (!fs_1.default.existsSync(fileName)) {
            throw new graphql_1.GraphQLError(`File not found: ${fileName}`);
        }
        const result = await cloudinary_1.v2.uploader.upload(fileName);
        return result.secure_url;
    }
    catch (error) {
        if (error.message.includes("Invalid")) {
            console.error("Cloudinary configuration error:", error);
            throw new graphql_1.GraphQLError("Cloudinary credentials are invalid. Please check your API key and secret.");
        }
        else if (error.message.includes("File not found")) {
            console.error("File not found:", error);
            throw new graphql_1.GraphQLError(`The file at path ${imagePath} does not exist.`);
        }
        else {
            console.error("Error uploading image:", error);
            throw new graphql_1.GraphQLError("Failed to upload image to Cloudinary. Please try again.");
        }
    }
};
exports.ImageUploader = ImageUploader;
