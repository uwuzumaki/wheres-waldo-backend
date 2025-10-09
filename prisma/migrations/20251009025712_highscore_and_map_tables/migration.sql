-- CreateTable
CREATE TABLE "public"."HighScore" (
    "id" TEXT NOT NULL,
    "map_ID" TEXT NOT NULL,
    "session_ID" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "total_time" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HighScore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Maps" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "obj1x" INTEGER NOT NULL,
    "obj1y" INTEGER NOT NULL,
    "obj2x" INTEGER NOT NULL,
    "obj2y" INTEGER NOT NULL,
    "obj3x" INTEGER NOT NULL,
    "obj3y" INTEGER NOT NULL,

    CONSTRAINT "Maps_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HighScore_id_key" ON "public"."HighScore"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Maps_id_key" ON "public"."Maps"("id");
