import 'dotenv/config'
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ListModule } from './list/list.module';
import sequelize from '../database/client';

const ListModel = List(sequelize, Sequelize.DataTypes);

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_URL,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.PASSWORD,
      database: process.env.NAME,
    }),
    ListModule
  ],
})
export class AppModule {}