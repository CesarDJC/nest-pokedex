import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //modificar la ruta de el backend en este caso la ruta seria api/v2/pokemon
  app.setGlobalPrefix('api/v2');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted:true,
      transformOptions:{
        exposeUnsetFields:false
      }
    })
  )
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
