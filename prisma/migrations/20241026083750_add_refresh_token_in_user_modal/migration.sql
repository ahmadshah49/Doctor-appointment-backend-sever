/*
  Warnings:

  - You are about to drop the column `isBooked` on the `AvailabilitySlot` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AvailabilitySlot" DROP COLUMN "isBooked";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "refreshToken" TEXT;
