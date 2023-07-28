import { Module } from "@nestjs/common";
import { DbService } from "src/dbService/db.service";
import { InteractionModuleBase } from "./base/interaction.module.base";
import { InteractionService } from "./interaction.service";
import { InteractionController } from "./interaction.controller";
import { InteractionResolver } from "./interaction.resolver";

@Module({
  imports: [InteractionModuleBase],
  controllers: [InteractionController],
  providers: [InteractionService, InteractionResolver, DbService],
  exports: [InteractionService],
})
export class InteractionModule {}
