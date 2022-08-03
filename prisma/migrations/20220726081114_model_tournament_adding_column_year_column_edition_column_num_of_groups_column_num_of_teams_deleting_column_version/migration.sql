/*
  Warnings:

  - You are about to drop the column `version` on the `Tournament` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tournament" DROP COLUMN "version",
ADD COLUMN     "edition" INTEGER,
ADD COLUMN     "numOfGroups" INTEGER,
ADD COLUMN     "numOfTeams" INTEGER,
ADD COLUMN     "year" INTEGER;
