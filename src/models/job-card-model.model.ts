import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class JobCardModel extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  job_card_no: string;

  @property({
    type: 'number',
    required: true,
  })
  job_card_status: number;

  @property({
    type: 'date',
    default: null,
  })
  created_at?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<JobCardModel>) {
    super(data);
  }
}

export interface JobCardModelRelations {
  // describe navigational properties here
}

export type JobCardModelWithRelations = JobCardModel & JobCardModelRelations;
