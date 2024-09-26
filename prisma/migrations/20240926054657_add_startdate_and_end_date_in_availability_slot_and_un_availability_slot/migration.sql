/*
  Warnings:

  - You are about to drop the column `day` on the `AvailabilitySlot` table. All the data in the column will be lost.
  - Added the required column `endDate` to the `AvailabilitySlot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `AvailabilitySlot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `UnavailabilitySlot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `UnavailabilitySlot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AvailabilitySlot" DROP COLUMN "day",
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "UnavailabilitySlot" ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "startDate" DROP NOT NULL,
ALTER COLUMN "endDate" DROP NOT NULL;
