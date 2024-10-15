"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipleImagesUploader = void 0;
const cloudinary_1 = require("cloudinary");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const graphql_1 = require("graphql");
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});
const MultipleImagesUploader = async (imagePaths) => {
    try {
        const mainDir = path_1.default.resolve(__dirname, "..", "assets", "uploads");
        const uploadedImages = [];
        for (const imagePath of imagePaths) {
            const fileName = path_1.default.join(mainDir, imagePath);
            console.log("Uploading File:", fileName);
            if (!fs_1.default.existsSync(fileName)) {
                throw new graphql_1.GraphQLError(`File not found: ${fileName}`);
            }
            const result = await cloudinary_1.v2.uploader.upload(fileName);
            uploadedImages.push(result.secure_url);
        }
        return uploadedImages;
    }
    catch (error) {
        if (error.message.includes("Invalid")) {
            console.error("Cloudinary configuration error:", error);
            throw new graphql_1.GraphQLError("Cloudinary credentials are invalid. Please check your API key and secret.");
        }
        else if (error.message.includes("File not found")) {
            console.error("File not found:", error);
            throw new graphql_1.GraphQLError(`One or more files in the array do not exist.`);
        }
        else {
            console.error("Error uploading image(s):", error);
            throw new graphql_1.GraphQLError("Failed to upload one or more images to Cloudinary. Please try again.");
        }
    }
};
exports.MultipleImagesUploader = MultipleImagesUploader;
