import { ApiProperty } from "@nestjs/swagger";
import { Annonce } from "./Annonce";
export class getListAnnonceDto {
  @ApiProperty({
    type: [Annonce],
  })
  readonly paginatedResult!: [Annonce];

  @ApiProperty({
    type: Number,
  })
  readonly totalCount!: number;
}
