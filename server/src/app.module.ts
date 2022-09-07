import { Module, NestModule, RequestMethod, MiddlewareConsumer } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CatsModule } from "./cats/cats.module";
import { UserModule } from "./user/user.module";

import { LoggerMiddleware } from "./middlewares/logger.middleware";
import { CatsController } from "./cats/cats.controller";

import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://testuser:testpassword@nest-js-cluster.vsmwqtb.mongodb.net/01-Basic-CRUD?retryWrites=true&w=majority"), CatsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).exclude({ path: "cats", method: RequestMethod.POST }).forRoutes(CatsController);
  }
}

//
/* //**Middleware
--> here middleware is applied only to the 'cats' route, and is not available to the 'user' route

--> further, we can restrict a middlewae to a particular request method -->  by passing an object containing the route path and request method to the forRoutes() method when configuring the middleware.

.forRoutes({ path: 'cats', method: RequestMethod.GET });


//** multiple middleware
consumer.apply(cors(), helmet(), logger).forRoutes(CatsController);

//** global middleware
to bind middleware to every registered route at once, we use the use() method in main.ts -->
const app = await NestFactory.create(AppModule);
app.use(logger);
await app.listen(3000);
*/

/* //** mongo_db connection using .env file
@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => configService.getMongoConfig(),
    }),
    CatsModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

*/
