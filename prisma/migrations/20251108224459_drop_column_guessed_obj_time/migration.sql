/*
  Warnings:

  - You are about to drop the column `guessedObjTime` on the `GameSession` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `HighScore` table. All the data in the column will be lost.
  - You are about to drop the column `total_time` on the `HighScore` table. All the data in the column will be lost.
  - Added the required column `time` to the `HighScore` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GameSession" DROP COLUMN "guessedObjTime";

-- AlterTable
ALTER TABLE "HighScore" DROP COLUMN "createAt",
DROP COLUMN "total_time",
ADD COLUMN     "time" INTEGER NOT NULL;
