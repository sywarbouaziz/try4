import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { Logger } from "winston";
import { AnnonceService } from "./annonce.service";
import { AnnonceControllerBase } from "./base/annonce.controller.base";

@swagger.ApiTags("annonces")
@common.Controller("annonces")
export class AnnonceController extends AnnonceControllerBase {
  constructor(
    protected readonly service: AnnonceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
    @common.Inject("winston")
    protected readonly logger: Logger
  ) {
    super(service, rolesBuilder, logger);
  }
}
