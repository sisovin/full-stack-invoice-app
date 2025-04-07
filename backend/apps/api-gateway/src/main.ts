import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { AuthGuard } from './guards/auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { TimeoutInterceptor } from './interceptors/timeout.interceptor';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';
import { ValidationExceptionFilter } from './exceptions/validation-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Apply global middlewares
  app.use(LoggerMiddleware);

  // Apply global guards
  app.useGlobalGuards(new AuthGuard(), new RolesGuard());

  // Apply global interceptors
  app.useGlobalInterceptors(new LoggingInterceptor(), new TimeoutInterceptor());

  // Apply global exception filters
  app.useGlobalFilters(new HttpExceptionFilter(), new ValidationExceptionFilter());

  await app.listen(3000);
}
bootstrap();
