/*
  Warnings:

  - The values [MAlE] on the enum `gender` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[doctorId]` on the table `Appointment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[patientId]` on the table `Appointment` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "gender_new" AS ENUM ('MALE', 'FEMALE', 'OTHERS');
ALTER TABLE "Doctor" ALTER COLUMN "gender" TYPE "gender_new" USING ("gender"::text::"gender_new");
ALTER TABLE "Patient" ALTER COLUMN "gender" TYPE "gender_new" USING ("gender"::text::"gender_new");
ALTER TABLE "Appointment" ALTER COLUMN "gender" TYPE "gender_new" USING ("gender"::text::"gender_new");
ALTER TYPE "gender" RENAME TO "gender_old";
ALTER TYPE "gender_new" RENAME TO "gender";
DROP TYPE "gender_old";
COMMIT;

-- CreateIndex
CREATE UNIQUE INDEX "Appointment_doctorId_key" ON "Appointment"("doctorId");

-- CreateIndex
CREATE UNIQUE INDEX "Appointment_patientId_key" ON "Appointment"("patientId");
