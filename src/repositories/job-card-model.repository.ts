import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {JobCardModel, JobCardModelRelations} from '../models';

export class JobCardModelRepository extends DefaultCrudRepository<
  JobCardModel,
  typeof JobCardModel.prototype.id,
  JobCardModelRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(JobCardModel, dataSource);
  }
}
