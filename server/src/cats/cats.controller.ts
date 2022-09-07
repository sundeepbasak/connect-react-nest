import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateUserDto } from "./dto/update-cat.dto";

@Controller("cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async getAllCats() {
    return this.catsService.getAllCats();
  }

  @Post()
  async createCat(@Body() createCatDto: CreateCatDto) {
    return this.catsService.createCat(createCatDto);
  }

  @Get(":id")
  async getCat(@Param("id") id: string) {
    return this.catsService.getCat(id);
  }
  
  @Put(":id")
  async updateCat(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.catsService.updateCat(id, updateUserDto);
  }

  @Delete(":id")
  async deleteCat(@Param("id") id: string) {
    return this.catsService.deleteCat(id);
  }
}
