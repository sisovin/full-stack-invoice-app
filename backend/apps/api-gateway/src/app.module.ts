import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { RolesModule } from './modules/roles/roles.module';
import { AuditModule } from './modules/audit/audit.module';
import { InvoicesModule } from './modules/invoices/invoices.module';
import { OrganizationsModule } from './modules/organizations/organizations.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { CustomersModule } from './modules/customers/customers.module';
import { CacheModule } from './modules/cache/cache.module';
import { LoggerService } from './services/logger.service';
import { RedisService } from './services/redis.service';
import { ErrorHandlerService } from './services/error-handler.service';
import { EmailService } from './services/email.service';
import { RateLimiterService } from './services/rate-limiter.service';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    RolesModule,
    AuditModule,
    InvoicesModule,
    OrganizationsModule,
    PaymentsModule,
    CustomersModule,
    CacheModule,
  ],
  providers: [
    LoggerService,
    RedisService,
    ErrorHandlerService,
    EmailService,
    RateLimiterService,
  ],
})
export class AppModule {}
