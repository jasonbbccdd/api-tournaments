-- AlterTable
ALTER TABLE "Tournament" ADD COLUMN     "confederationId" INTEGER;

-- AddForeignKey
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_confederationId_fkey" FOREIGN KEY ("confederationId") REFERENCES "Confederation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
