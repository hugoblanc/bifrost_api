import { Module } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';
import { PubsubhubService } from './pubsubhub/pubsubhub.service';
import { HelperModule } from '../../helper/helper.module';
import { ContentModule } from '../../content/content.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HelperModule, ContentModule, ConfigModule.forRoot()],
  providers: [ConfigurationService, PubsubhubService],
})
export class ConfigurationModule {}
