/*
  Warnings:

  - The primary key for the `Maps` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Maps` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."Maps" DROP CONSTRAINT "Maps_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Maps_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Maps_id_key" ON "public"."Maps"("id");
