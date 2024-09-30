/*
  Warnings:

  - You are about to drop the column `day` on the `UnavailabilitySlot` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "UnavailabilitySlot" DROP CONSTRAINT "UnavailabilitySlot_doctorId_fkey";

-- AlterTable
ALTER TABLE "UnavailabilitySlot" DROP COLUMN "day";

-- AddForeignKey
ALTER TABLE "UnavailabilitySlot" ADD CONSTRAINT "UnavailabilitySlot_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
