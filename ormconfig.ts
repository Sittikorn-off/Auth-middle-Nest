import { User } from 'src/entities/user.entity';
import { Product } from 'src/entities/product.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'aut_test',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  entities: [User, Product],
  synchronize: true,
};

export default config;
