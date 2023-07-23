import { BoardItem, PrismaClient, Prisma } from "@prisma/client";
import { UpdateBoardItemDto } from "../services/board.service";
import { BoardDto } from "../dto/board.dto";
import { BoardItemDto } from "../dto/boardItem.dto";
import { IRepository } from "../interfaces/database.interface";

export class BoardRepository implements IRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  // async findOneById(id: string): Promise<BoardDto | null> {
  //   return await this.prismaClient.board.findUnique({ where: { id } });
  // }

  async createOne(board: BoardItemDto): Promise<void> {
    console.log("repo");
    console.log(board);
    await this.prismaClient.boardItem.create({
      data: board,
    });
  }

  // async updateOne(
  //   id: string,
  //   totalQty: number,
  //   orderItems: UpdateOrderItemDto
  // ) {
  //   await this.prismaClient.order.update({
  //     where: { id },
  //     data: {
  //       totalQty,
  //       orderItems: {
  //         update: {
  //           where: { id: orderItems.orderItemId },
  //           data: { qty: orderItems.qty },
  //         },
  //       },
  //     },
  //   });
  // }

  // async deleteOne(id: string) {
  //   await this.order.update({
  //     where: { id },
  //     data: {
  //       deletedAt: new Date(),
  //       orderItems: {
  //         updateMany: {
  //           where: {},
  //           data: {
  //             deletedAt: new Date(),
  //           },
  //         },
  //       },
  //     },
  //   });
  // }
}
