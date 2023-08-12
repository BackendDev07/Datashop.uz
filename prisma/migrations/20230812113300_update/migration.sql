/*
  Warnings:

  - You are about to drop the `Detail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ForgotPassword` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Rating` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Review` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Saved` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Detail" DROP CONSTRAINT "Detail_productId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_productId_fkey";

-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_productId_fkey";

-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_userId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_productId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_userId_fkey";

-- DropForeignKey
ALTER TABLE "Saved" DROP CONSTRAINT "Saved_productId_fkey";

-- DropForeignKey
ALTER TABLE "Saved" DROP CONSTRAINT "Saved_userId_fkey";

-- DropTable
DROP TABLE "Detail";

-- DropTable
DROP TABLE "ForgotPassword";

-- DropTable
DROP TABLE "Image";

-- DropTable
DROP TABLE "Rating";

-- DropTable
DROP TABLE "Review";

-- DropTable
DROP TABLE "Saved";
