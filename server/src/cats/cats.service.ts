import { Injectable } from "@nestjs/common";
import { CreateCatDto } from "./dto/create-cat.dto";
import { UpdateUserDto } from "./dto/update-cat.dto";

//mongoose and schema
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Cat, CatDocument } from "./schemas/cat.schema";

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async getAllCats(): Promise<Cat[]> {
    // console.log(this);
    return this.catModel.find();
  }

  async createCat(createCatDto: CreateCatDto): Promise<Cat> {
    const cat = new this.catModel(createCatDto);
    return cat.save();
  }

  async getCat(id: string) {
    const cat = await this.catModel.findOne({ _id: id });
    if (!cat) {
      return `No such cat exist with id: ${id}`;
    }
    return cat;
  }

  async updateCat(id: string, updateUserDto: UpdateUserDto) {
    let cat = await this.catModel.findOneAndUpdate({ _id: id }, updateUserDto, {
      new: true,
    });
    if (!cat) {
      return `No such cat exist with id: ${id}`;
    }
    return cat;
  }

  async deleteCat(id: string) {
    const cat = await this.catModel.findOneAndDelete({ _id: id });
    if (!cat) {
      return `No such cat exist with id: ${id}`;
    }
    return cat;
  }
}
