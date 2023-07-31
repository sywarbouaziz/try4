-- CreateEnum
CREATE TYPE "EnumUserUserType" AS ENUM ('Regular', 'Pro');

-- CreateEnum
CREATE TYPE "EnumAnnonceAnnonceType" AS ENUM ('Pub', 'Alert', 'Imm', 'Pro', 'Recommend');

-- CreateEnum
CREATE TYPE "EnumInteractionInteractionType" AS ENUM ('Like', 'Report', 'Comment');

-- CreateEnum
CREATE TYPE "EnumInteractionUserInteractionType" AS ENUM ('Appointment', 'Connect', 'Message');

-- CreateTable
CREATE TABLE "AppConfig" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "value" TEXT,
    "key" TEXT,

    CONSTRAINT "AppConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "firstName" TEXT,
    "lastName" TEXT,
    "username" TEXT NOT NULL,
    "password" TEXT,
    "isValid" BOOLEAN,
    "roles" TEXT[],
    "email" TEXT,
    "userType" "EnumUserUserType"[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Annonce" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "title" TEXT,
    "content" TEXT,
    "endDate" TIMESTAMP(3),
    "annonceType" "EnumAnnonceAnnonceType",
    "longitude" DOUBLE PRECISION,
    "latitude" DOUBLE PRECISION,
    "usersId" TEXT DEFAULT requesting_user_id(),

    CONSTRAINT "Annonce_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Interaction" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "interactionType" "EnumInteractionInteractionType"[],
    "userId" TEXT DEFAULT requesting_user_id(),
    "annonceId" TEXT,

    CONSTRAINT "Interaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InteractionUser" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "interactionType" "EnumInteractionUserInteractionType"[],
    "date" TIMESTAMP(3),
    "status" TEXT,
    "user2Id" TEXT DEFAULT requesting_user_id(),
    "usersId" TEXT DEFAULT requesting_user_id(),

    CONSTRAINT "InteractionUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AppConfig_key_key" ON "AppConfig"("key");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Annonce_usersId_key" ON "Annonce"("usersId");

-- CreateIndex
CREATE UNIQUE INDEX "InteractionUser_user2Id_key" ON "InteractionUser"("user2Id");

-- CreateIndex
CREATE UNIQUE INDEX "InteractionUser_usersId_key" ON "InteractionUser"("usersId");

-- AddForeignKey
ALTER TABLE "Annonce" ADD CONSTRAINT "Annonce_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interaction" ADD CONSTRAINT "Interaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interaction" ADD CONSTRAINT "Interaction_annonceId_fkey" FOREIGN KEY ("annonceId") REFERENCES "Annonce"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InteractionUser" ADD CONSTRAINT "InteractionUser_user2Id_fkey" FOREIGN KEY ("user2Id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InteractionUser" ADD CONSTRAINT "InteractionUser_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
