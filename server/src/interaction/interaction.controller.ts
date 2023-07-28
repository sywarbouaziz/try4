import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { Logger } from "winston";
import { InteractionService } from "./interaction.service";
import { InteractionControllerBase } from "./base/interaction.controller.base";

@swagger.ApiTags("interactions")
@common.Controller("interactions")
export class InteractionController extends InteractionControllerBase {
  constructor(
    protected readonly service: InteractionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
    @common.Inject("winston")
    protected readonly logger: Logger
  ) {
    super(service, rolesBuilder, logger);
  }
}
