/*
  Warnings:

  - Added the required column `originalx` to the `Maps` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originaly` to the `Maps` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Maps" ADD COLUMN     "originalx" INTEGER NOT NULL,
ADD COLUMN     "originaly" INTEGER NOT NULL;
