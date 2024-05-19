import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { UserEntity } from 'src/users/entities/user.entity';
import { RoleEntity } from 'src/roles/entities/role.entity';
import { UserRolesEntity } from 'src/roles/entities/user-roles.entity';
import { ReactionEntity } from 'src/reactions/entities/reaction.entity';
import { FileEntity } from 'src/files/entities/file.entity';
import { TrackEntity } from 'src/tracks/entities/track.entity';
import { AlbumEntity } from 'src/albums/entities/album.entity';

export default (): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: process.env.LH_PG_HOST,
  port: parseInt(process.env.LH_PG_PORT, 10) || 5432,
  database: process.env.LH_PG_DBN,
  username: process.env.LH_PG_USER,
  password: process.env.LH_PG_PSW,
  entities: [
    UserEntity,
    RoleEntity,
    UserRolesEntity,
    FileEntity,
    TrackEntity,
    AlbumEntity,
    ReactionEntity,
    // ! не отраб.подкл.по пути - постояный сбор query: SELECT * FROM current_schema() | ошб.в swg - "statusCode": 500, "message": "Internal server error
    // `../../*/entities/*.entity.ts`, `src/*/entities/*.entity{.ts,.js}`, `src/**/*.entity.ts`, `*/entities/**.entity{.ts}`, path.join(__dirname, 'src', '**', 'entities', '*.entity.{ts,js}'),
  ],
  synchronize: process.env.NODE_ENV !== 'production',
  logging: true,
});
