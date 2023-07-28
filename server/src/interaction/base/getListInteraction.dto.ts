import { ApiProperty } from "@nestjs/swagger";
import { Interaction } from "./Interaction";
export class getListInteractionDto {
  @ApiProperty({
    type: [Interaction],
  })
  readonly paginatedResult!: [Interaction];

  @ApiProperty({
    type: Number,
  })
  readonly totalCount!: number;
}
