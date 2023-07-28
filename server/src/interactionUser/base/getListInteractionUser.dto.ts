import { ApiProperty } from "@nestjs/swagger";
import { InteractionUser } from "./InteractionUser";
export class getListInteractionUserDto {
  @ApiProperty({
    type: [InteractionUser],
  })
  readonly paginatedResult!: [InteractionUser];

  @ApiProperty({
    type: Number,
  })
  readonly totalCount!: number;
}
