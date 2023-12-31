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
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, IsEnum, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EnumInteractionInteractionType } from "./EnumInteractionInteractionType";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { AnnonceWhereUniqueInput } from "../../annonce/base/AnnonceWhereUniqueInput";
@InputType()
class InteractionUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  deletedAt?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumInteractionInteractionType,
    isArray: true,
  })
  @IsEnum(EnumInteractionInteractionType, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumInteractionInteractionType], {
    nullable: true,
  })
  interactionType?: Array<"Like" | "Report" | "Comment">;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => AnnonceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AnnonceWhereUniqueInput)
  @IsOptional()
  @Field(() => AnnonceWhereUniqueInput, {
    nullable: true,
  })
  annonce?: AnnonceWhereUniqueInput | null;
}
export { InteractionUpdateInput };
