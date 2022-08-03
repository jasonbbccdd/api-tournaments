/*
  Warnings:

  - A unique constraint covering the columns `[code2,type]` on the table `Team` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Group" DROP CONSTRAINT "Group_tournamentId_fkey";

-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_confederationId_fkey";

-- DropForeignKey
ALTER TABLE "TeamsOnGroups" DROP CONSTRAINT "TeamsOnGroups_groupId_fkey";

-- DropForeignKey
ALTER TABLE "TeamsOnGroups" DROP CONSTRAINT "TeamsOnGroups_teamId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "Team_code2_type_key" ON "Team"("code2", "type");

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_confederationId_fkey" FOREIGN KEY ("confederationId") REFERENCES "Confederation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamsOnGroups" ADD CONSTRAINT "TeamsOnGroups_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamsOnGroups" ADD CONSTRAINT "TeamsOnGroups_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE CASCADE ON UPDATE CASCADE;
