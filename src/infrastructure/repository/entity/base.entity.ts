import { EntitySchemaColumnOptions } from 'typeorm';

export const BaseEntity = {
  id: {
    type: String,
    primary: true,
  } as EntitySchemaColumnOptions,
  createdAt: {
    name: 'created_at',
    type: 'timestamp with time zone',
    createDate: true,
  } as EntitySchemaColumnOptions,
};
