/*
  Warnings:

  - Added the required column `fullName` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNo` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Made the column `age` on table `Patient` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `Patient` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Patient" DROP CONSTRAINT "Patient_doctorId_fkey";

-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "phoneNo" TEXT NOT NULL,
ALTER COLUMN "age" SET NOT NULL,
ALTER COLUMN "address" SET NOT NULL,
ALTER COLUMN "doctorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
