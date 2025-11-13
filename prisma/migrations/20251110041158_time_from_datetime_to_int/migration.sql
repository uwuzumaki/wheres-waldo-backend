/*
  Warnings:

  - The `totalTime` column on the `GameSession` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "GameSession" DROP COLUMN "totalTime",
ADD COLUMN     "totalTime" INTEGER;

-- AlterTable
ALTER TABLE "HighScore" ALTER COLUMN "username" SET DEFAULT 'Anonymous';
