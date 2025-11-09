/*
  Warnings:

  - The `mapID` column on the `GameSession` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "GameSession" DROP COLUMN "mapID",
ADD COLUMN     "mapID" INTEGER;
