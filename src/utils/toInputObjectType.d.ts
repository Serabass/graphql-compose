import { GraphQLType, GraphQLInputType, GraphQLObjectType } from '../graphql';
import { InputTypeComposer } from '../InputTypeComposer';
import { TypeComposer } from '../TypeComposer';
import { SchemaComposer } from '../SchemaComposer';

export interface ToInputObjectTypeOpts {
  prefix?: string;
  postfix?: string;
}

export function toInputObjectType(
  typeComposer: TypeComposer<any, any>,
  opts?: ToInputObjectTypeOpts,
): InputTypeComposer;

export interface ConvertInputObjectFieldOpts {
  prefix?: string;
  postfix?: string;
  fieldName?: string;
  outputTypeName?: string;
}

export function convertInputObjectField(
  field: GraphQLType,
  opts: ConvertInputObjectFieldOpts,
  schemaComposer: SchemaComposer<any>,
): GraphQLInputType;
