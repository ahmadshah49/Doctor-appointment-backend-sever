-- AlterTable
ALTER TABLE "User" ADD COLUMN     "otpExpire" TIMESTAMP(3),
ADD COLUMN     "tokenExpire" TIMESTAMP(3);
