import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule],   //to link modules together
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
