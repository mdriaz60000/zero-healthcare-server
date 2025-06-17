/*
  Warnings:

  - You are about to drop the column `isDeleteAt` on the `admins` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "admins" DROP COLUMN "isDeleteAt",
ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;
