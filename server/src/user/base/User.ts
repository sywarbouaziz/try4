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
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  IsOptional,
  IsBoolean,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Annonce } from "../../annonce/base/Annonce";
import { Interaction } from "../../interaction/base/Interaction";
import { InteractionUser } from "../../interactionUser/base/InteractionUser";
import { EnumUserUserType } from "./EnumUserUserType";
@ObjectType()
class User {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  deletedAt!: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isValid!: boolean | null;

  @ApiProperty({
    required: true,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @Field(() => [String])
  roles!: Array<string>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Annonce],
  })
  @ValidateNested()
  @Type(() => Annonce)
  @IsOptional()
  annonce?: Array<Annonce>;

  @ApiProperty({
    required: false,
    type: () => [Interaction],
  })
  @ValidateNested()
  @Type(() => Interaction)
  @IsOptional()
  interactions?: Array<Interaction>;

  @ApiProperty({
    required: false,
    type: () => [InteractionUser],
  })
  @ValidateNested()
  @Type(() => InteractionUser)
  @IsOptional()
  interactionUsers?: Array<InteractionUser>;

  @ApiProperty({
    required: false,
    type: () => [InteractionUser],
  })
  @ValidateNested()
  @Type(() => InteractionUser)
  @IsOptional()
  interactionUsers2?: Array<InteractionUser>;

  @ApiProperty({
    required: false,
    enum: EnumUserUserType,
    isArray: true,
  })
  @IsEnum(EnumUserUserType, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumUserUserType], {
    nullable: true,
  })
  userType?: Array<"Regular" | "Pro">;
}
export { User };
