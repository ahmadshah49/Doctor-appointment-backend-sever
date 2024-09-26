/*
  Warnings:

  - A unique constraint covering the columns `[doctorId]` on the table `Appointment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[patientId]` on the table `Appointment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[doctorId]` on the table `AvailabilitySlot` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "UnavailabilitySlot" (
    "id" SERIAL NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "day" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "reason" TEXT,
    "isAvailable" BOOLEAN,

    CONSTRAINT "UnavailabilitySlot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UnavailabilitySlot_doctorId_key" ON "UnavailabilitySlot"("doctorId");

-- CreateIndex
CREATE UNIQUE INDEX "Appointment_doctorId_key" ON "Appointment"("doctorId");

-- CreateIndex
CREATE UNIQUE INDEX "Appointment_patientId_key" ON "Appointment"("patientId");

-- CreateIndex
CREATE UNIQUE INDEX "AvailabilitySlot_doctorId_key" ON "AvailabilitySlot"("doctorId");

-- AddForeignKey
ALTER TABLE "UnavailabilitySlot" ADD CONSTRAINT "UnavailabilitySlot_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
