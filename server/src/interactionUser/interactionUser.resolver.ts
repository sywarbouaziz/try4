import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { Logger } from "winston";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { InteractionUserResolverBase } from "./base/interactionUser.resolver.base";
import { InteractionUser } from "./base/InteractionUser";
import { InteractionUserService } from "./interactionUser.service";

@graphql.Resolver(() => InteractionUser)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class InteractionUserResolver extends InteractionUserResolverBase {
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
