import { DataSource } from "typeorm";
import { User } from "../entities/user";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "type",
    password: process.env.DATABASE_PASSWORD,
    database: "typeORM",
    entities: [User],
    synchronize: true, 
    logging: true,
    migrations : [],
    subscribers: [],
});
