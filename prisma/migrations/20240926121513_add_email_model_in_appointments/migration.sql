/*
  Warnings:

  - Added the required column `email` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Made the column `fullName` on table `Appointment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `age` on table `Appointment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gender` on table `Appointment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phoneNo` on table `Appointment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `Appointment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "fullName" SET NOT NULL,
ALTER COLUMN "age" SET NOT NULL,
ALTER COLUMN "gender" SET NOT NULL,
ALTER COLUMN "phoneNo" SET NOT NULL,
ALTER COLUMN "address" SET NOT NULL;
