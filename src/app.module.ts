import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose'; // 1.1 Import the mongoose module

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/store'), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
