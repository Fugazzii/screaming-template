import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { VersioningType } from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    
    app.setGlobalPrefix("api")
        .enableVersioning({
            type: VersioningType.URI,
            prefix: "v"
        })
        .enableCors({ 
            origin: "*", 
            allowedHeaders: "*"
        });

    await app.listen(3000);
}
bootstrap();
