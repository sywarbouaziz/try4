import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { Logger } from "winston";
import { InteractionUserService } from "./interactionUser.service";
import { InteractionUserControllerBase } from "./base/interactionUser.controller.base";

@swagger.ApiTags("interaction-users")
@common.Controller("interaction-users")
export class InteractionUserController extends InteractionUserControllerBase {
  constructor(
    protected readonly service: InteractionUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
    @common.Inject("winston")
    protected readonly logger: Logger
  ) {
    super(service, rolesBuilder, logger);
  }
}
