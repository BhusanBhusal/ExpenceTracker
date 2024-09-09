-- CreateTable
CREATE TABLE "Income" (
    "id" SERIAL NOT NULL,
    "incomeName" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "Income_pkey" PRIMARY KEY ("id")
);
