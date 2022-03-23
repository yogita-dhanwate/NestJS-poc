import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }
    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number
    ) {
        const generateId = this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);
        return {
            id: generateId
        }
    }

    @Get()
    getAllProducts() {
        const products = this.productsService.getProducts();
        return products;
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string) {
       const product = this.productsService.getSingleProduct(prodId);
       return product;
    }

    @Patch(':id')
    updateProduct(@Param('id') prodId: string, @Body('title') prodTitle: string, @Body('description') prodDesc: string, @Body('price') prodPrice: number) {
       this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
    }

    @Delete(':id')
    removeProduct(@Param('id') prodId: string) {
        this.productsService.deleteProduct(prodId);
    }
}