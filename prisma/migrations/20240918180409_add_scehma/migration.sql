-- CreateEnum
CREATE TYPE "role" AS ENUM ('DOCTOR', 'ADMIN');

-- CreateEnum
CREATE TYPE "gender" AS ENUM ('MAlE', 'FEMALE');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT,
    "phoneNumber" INTEGER,
    "role" "role" NOT NULL DEFAULT 'DOCTOR',
    "token" TEXT,
    "otp" TEXT,
    "resetPasswordToken" TEXT,
    "proflePicture" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "fullName" TEXT,
    "age" TEXT,
    "gender" "gender",
    "phoneNo" TEXT,
    "address" TEXT,
    "medicalHistory" TEXT,
    "presciptions" TEXT[],

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
