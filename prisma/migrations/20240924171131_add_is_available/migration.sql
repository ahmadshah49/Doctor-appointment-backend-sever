/*
  Warnings:

  - Made the column `gender` on table `Doctor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Doctor` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Doctor" ALTER COLUMN "gender" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "isAvailable" SET DEFAULT true;
