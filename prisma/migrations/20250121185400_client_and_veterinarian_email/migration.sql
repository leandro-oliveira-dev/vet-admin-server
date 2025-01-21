/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Client` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Veterinarian` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Veterinarian` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" ADD COLUMN "email" TEXT DEFAULT 'default@email.com';

-- AlterTable
ALTER TABLE "Veterinarian" ADD COLUMN "email" TEXT DEFAULT 'default@email.com';

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Veterinarian_email_key" ON "Veterinarian"("email");
