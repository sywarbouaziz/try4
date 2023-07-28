/*
//------------------------------------------------------------------------------ 
// This code was generated by Amplication. 
// 
// Changes to this file will be lost if the code is regenerated. 
//
// There are other ways to to customize your code, see this doc to learn more
// https://docs.amplication.com/docs/how-to/custom-code
//
//------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BatchPayload } from "../../BatchPayload";
import { Logger } from "winston";
import { fileDto } from "../../file.dto";
import * as XLSX from "xlsx";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { PaginatedInterface } from "../../util/PaginatedInterface";
import { AnnonceService } from "../annonce.service";
import { AnnonceCreateInput } from "./AnnonceCreateInput";
import { AnnonceCreateManyInput } from "./AnnonceCreateManyInput";
import { AnnonceWhereInput } from "./AnnonceWhereInput";
import { AnnonceWhereUniqueInput } from "./AnnonceWhereUniqueInput";
import { AnnonceFindManyArgs } from "./AnnonceFindManyArgs";
import { AnnonceupdateManyArgs } from "./AnnonceupdateManyArgs";
import { AnnonceUpdateInput } from "./AnnonceUpdateInput";
import { Annonce } from "./Annonce";
import { InteractionWhereInput } from "../../interaction/base/InteractionWhereInput";
import { Interaction } from "../../interaction/base/Interaction";
import { getListAnnonceDto } from "./getListAnnonce.dto";
@swagger.ApiBearerAuth()
export class AnnonceControllerBase {
  constructor(
    protected readonly service: AnnonceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
    protected readonly logger: Logger
  ) {}

  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Annonce",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Annonce })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: AnnonceCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Annonce> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Annonce",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      this.logger.log({
        level: "error",
        message: `providing the properties: ${properties} on ${"Annonce"} creation is forbidden for roles: ${roles}`,
      });

      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Annonce"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        users: data.users
          ? {
              connect: data.users,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        title: true,
        content: true,
        endDate: true,
        annonceType: true,
        longitude: true,
        latitude: true,

        users: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/createMany")
  @nestAccessControl.UseRoles({
    resource: "Annonce",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Annonce })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async createMany(
    @common.Body() data: Array<AnnonceCreateManyInput>,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<BatchPayload | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Annonce",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      this.logger.log({
        level: "error",
        message: `providing the properties: ${properties} on ${"Annonce"} creation is forbidden for roles: ${roles}`,
      });

      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Annonce"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.createMany({
      data: data,
      skipDuplicates: false,
    });
  }

  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Annonce",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: getListAnnonceDto })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => AnnonceFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<PaginatedInterface<Annonce>> {
    const args = plainToClass(AnnonceFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Annonce",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        title: true,
        content: true,
        endDate: true,
        annonceType: true,
        longitude: true,
        latitude: true,

        users: {
          select: {
            id: true,
          },
        },
      },
    });
    const result = results.paginatedResult.map((result: Annonce) =>
      permission.filter(result)
    );
    return { paginatedResult: result, totalCount: results.totalCount };
  }

  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/fileExcel")
  @nestAccessControl.UseRoles({
    resource: "Annonce",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: fileDto })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findDataForExcel(
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<fileDto> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Annonce",
    });
    const results = await this.service.findMany({
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        title: true,
        content: true,
        endDate: true,
        annonceType: true,
        longitude: true,
        latitude: true,

        users: {
          select: {
            id: true,
          },
        },
      },
    });
    const result = results.paginatedResult.map((result: Annonce) =>
      permission.filter(result)
    );
    var excelFile = XLSX.utils.json_to_sheet(result);

    var Workbook = XLSX.utils.book_new();
    await XLSX.utils.book_append_sheet(Workbook, excelFile, "test");
    const file = await XLSX.write(Workbook, {
      bookType: "xlsx",
      bookSST: true,
      type: "base64",
    });
    return { file: file };
  }

  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Annonce",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Annonce })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: AnnonceWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Annonce | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Annonce",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        title: true,
        content: true,
        endDate: true,
        annonceType: true,
        longitude: true,
        latitude: true,

        users: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      this.logger.log({
        level: "error",
        message: `No resource was found for ${JSON.stringify(params)}`,
      });
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "Annonce",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Annonce })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: AnnonceWhereUniqueInput,
    @common.Body()
    data: AnnonceUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Annonce | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Annonce",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      this.logger.log({
        level: "error",
        message: `No resource was found for ${JSON.stringify(params)}`,
      });
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Annonce"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          users: data.users
            ? {
                connect: data.users,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          deletedAt: true,
          title: true,
          content: true,
          endDate: true,
          annonceType: true,
          longitude: true,
          latitude: true,

          users: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error: any) {
      if (isRecordNotFoundError(error)) {
        this.logger.log({
          level: "error",
          message: `No resource was found for ${JSON.stringify(params)}`,
        });
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "Annonce",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Annonce })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: AnnonceWhereUniqueInput
  ): Promise<Annonce | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          deletedAt: true,
          title: true,
          content: true,
          endDate: true,
          annonceType: true,
          longitude: true,
          latitude: true,

          users: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error: any) {
      if (isRecordNotFoundError(error)) {
        this.logger.log({
          level: "error",
          message: `No resource was found for ${JSON.stringify(params)}`,
        });
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/interactions")
  @nestAccessControl.UseRoles({
    resource: "Annonce",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => InteractionWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyInteractions(
    @common.Req() request: Request,
    @common.Param() params: AnnonceWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Interaction[] | null> {
    const query: InteractionWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Interaction",
    });
    const results = await this.service.findInteractions(params.id, {
      where: query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        interactionType: true,

        user: {
          select: {
            id: true,
          },
        },

        annonce: {
          select: {
            id: true,
          },
        },
      },
    });
    return results && results.map((result) => permission.filter(result));
  }

  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/interactions")
  @nestAccessControl.UseRoles({
    resource: "Annonce",
    action: "update",
    possession: "any",
  })
  async createInteractions(
    @common.Param() params: AnnonceWhereUniqueInput,
    @common.Body() body: AnnonceWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      interactions: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Annonce",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Annonce"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/interactions")
  @nestAccessControl.UseRoles({
    resource: "Annonce",
    action: "update",
    possession: "any",
  })
  async updateInteractions(
    @common.Param() params: AnnonceWhereUniqueInput,
    @common.Body() body: AnnonceWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      interactions: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Annonce",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Annonce"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/interactions")
  @nestAccessControl.UseRoles({
    resource: "Annonce",
    action: "update",
    possession: "any",
  })
  async deleteInteractions(
    @common.Param() params: AnnonceWhereUniqueInput,
    @common.Body() body: AnnonceWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      interactions: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Annonce",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Annonce"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
