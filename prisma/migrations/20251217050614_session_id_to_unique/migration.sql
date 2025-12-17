/*
  Warnings:

  - A unique constraint covering the columns `[session_ID]` on the table `HighScore` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "HighScore_session_ID_key" ON "HighScore"("session_ID");
