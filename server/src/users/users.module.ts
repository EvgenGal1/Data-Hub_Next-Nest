import { Module /* , forwardRef */ } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';
import { RoleEntity } from '../roles/entities/role.entity';
import { RolesModule } from '../roles/roles.module';
import { UserRolesEntity } from '../roles/entities/user-roles.entity';
import { FileEntity } from '../files/entities/file.entity';
import { TrackEntity } from '../tracks/entities/track.entity';
import { AlbumEntity } from '../albums/entities/album.entity';
import { DatabaseUtils } from '../utils/database.utils';

@Module({
  controllers: [UsersController],
  providers: [UsersService, DatabaseUtils],
  imports: [
    // ч/з TypeOrmModule.`для функции` подкл.UserEntity и пр. для раб.с табл.users и пр.
    // ^ подкл.неск.БД.
    // ^ > разраб. + доп.локал.сущности
    ...(process.env.NODE_ENV === 'development'
      ? [
          TypeOrmModule.forFeature(
            [
              UserEntity,
              RoleEntity,
              UserRolesEntity,
              FileEntity,
              TrackEntity,
              AlbumEntity,
            ],
            'localhost',
          ),
        ]
      : []),
    // ^ > производства только SupaBase
    TypeOrmModule.forFeature(
      [
        UserEntity,
        RoleEntity,
        UserRolesEntity,
        FileEntity,
        TrackEntity,
        AlbumEntity,
      ],
      'supabase',
    ),
    // подкл.использ.modulи
    RolesModule,
    // forwardRef(() => AuthModule),
  ],
  // exp. UsersService для видимости вне modulя (напр.в AuthService)
  exports: [UsersService],
})
export class UsersModule {}
