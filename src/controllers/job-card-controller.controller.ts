import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {JobCardModel} from '../models';
import {JobCardModelRepository} from '../repositories';

export class JobCardControllerController {
  constructor(
    @repository(JobCardModelRepository)
    public jobCardModelRepository : JobCardModelRepository,
  ) {}

  @post('/job-cards')
  @response(200, {
    description: 'JobCardModel model instance',
    content: {'application/json': {schema: getModelSchemaRef(JobCardModel)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(JobCardModel, {
            title: 'NewJobCardModel',
            exclude: ['id'],
          }),
        },
      },
    })
    jobCardModel: Omit<JobCardModel, 'id'>,
  ): Promise<any> {

    let jobCard = await this.jobCardModelRepository.create(jobCardModel);
    console.log("🚀 ~ file: job-card-controller.controller.ts:49 ~ JobCardControllerController ~ jobCard:", jobCard)
    return {data:"okokok"};
  }

  @get('/job-cards/count')
  @response(200, {
    description: 'JobCardModel model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(JobCardModel) where?: Where<JobCardModel>,
  ): Promise<Count> {
    return this.jobCardModelRepository.count(where);
  }

  @get('/job-cards')
  @response(200, {
    description: 'Array of JobCardModel model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(JobCardModel, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(JobCardModel) filter?: Filter<JobCardModel>,
  ): Promise<JobCardModel[]> {
    return this.jobCardModelRepository.find(filter);
  }

  @patch('/job-cards')
  @response(200, {
    description: 'JobCardModel PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(JobCardModel, {partial: true}),
        },
      },
    })
    jobCardModel: JobCardModel,
    @param.where(JobCardModel) where?: Where<JobCardModel>,
  ): Promise<Count> {
    return this.jobCardModelRepository.updateAll(jobCardModel, where);
  }

  @get('/job-cards/{id}')
  @response(200, {
    description: 'JobCardModel model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(JobCardModel, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(JobCardModel, {exclude: 'where'}) filter?: FilterExcludingWhere<JobCardModel>
  ): Promise<JobCardModel> {
    return this.jobCardModelRepository.findById(id, filter);
  }

  @patch('/job-cards/{id}')
  @response(204, {
    description: 'JobCardModel PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(JobCardModel, {partial: true}),
        },
      },
    })
    jobCardModel: JobCardModel,
  ): Promise<void> {
    await this.jobCardModelRepository.updateById(id, jobCardModel);
  }

  @put('/job-cards/{id}')
  @response(204, {
    description: 'JobCardModel PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() jobCardModel: JobCardModel,
  ): Promise<void> {
    await this.jobCardModelRepository.replaceById(id, jobCardModel);
  }

  @del('/job-cards/{id}')
  @response(204, {
    description: 'JobCardModel DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.jobCardModelRepository.deleteById(id);
  }
}
