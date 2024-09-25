/*
  Warnings:

  - Added the required column `name` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Made the column `address` on table `Doctor` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Doctor" ADD COLUMN     "email" TEXT,
ADD COLUMN     "isAvailable" BOOLEAN,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "profilePhoto" TEXT,
ALTER COLUMN "address" SET NOT NULL;
