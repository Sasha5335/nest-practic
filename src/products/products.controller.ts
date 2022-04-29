import { Body, Controller, Delete, Get, Param, Post, Put, Redirect } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  @Get()
  // @Redirect('https://google.com', 301)
  getAll(): string {
    return 'getOne';
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return 'getOne' + id;
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): string {
    return `Title ${createProductDto.title} \n Price: ${createProductDto.price}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Remove ${id}`;
  }

  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
    return `Update ${updateProductDto.title}`;
  }
}
