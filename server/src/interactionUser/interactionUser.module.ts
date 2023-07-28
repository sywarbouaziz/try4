import { Module } from "@nestjs/common";
import { DbService } from "src/dbService/db.service";
import { InteractionUserModuleBase } from "./base/interactionUser.module.base";
import { InteractionUserService } from "./interactionUser.service";
import { InteractionUserController } from "./interactionUser.controller";
import { InteractionUserResolver } from "./interactionUser.resolver";

@Module({
  imports: [InteractionUserModuleBase],
  controllers: [InteractionUserController],
  providers: [InteractionUserService, InteractionUserResolver, DbService],
  exports: [InteractionUserService],
})
export class InteractionUserModule {}
