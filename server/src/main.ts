import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  try {
    await app.listen(5000);
    console.log("server running on port 5000...");
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
