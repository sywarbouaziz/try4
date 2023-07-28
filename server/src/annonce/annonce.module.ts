import { Module } from "@nestjs/common";
import { DbService } from "src/dbService/db.service";
import { AnnonceModuleBase } from "./base/annonce.module.base";
import { AnnonceService } from "./annonce.service";
import { AnnonceController } from "./annonce.controller";
import { AnnonceResolver } from "./annonce.resolver";

@Module({
  imports: [AnnonceModuleBase],
  controllers: [AnnonceController],
  providers: [AnnonceService, AnnonceResolver, DbService],
  exports: [AnnonceService],
})
export class AnnonceModule {}
