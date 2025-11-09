/*
  Warnings:

  - Changed the type of `map_ID` on the `HighScore` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "HighScore" DROP COLUMN "map_ID",
ADD COLUMN     "map_ID" INTEGER NOT NULL;
