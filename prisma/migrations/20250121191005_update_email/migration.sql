/*
  Warnings:

  - Made the column `email` on table `Client` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Veterinarian` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Client" ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "email" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Veterinarian" ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "email" DROP DEFAULT;
