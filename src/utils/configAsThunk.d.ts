import { isFunction, isObject } from './is';
import { SchemaComposer } from '../SchemaComposer';
import {
  GraphQLFieldConfig,
  GraphQLArgumentConfig,
  GraphQLFieldConfigArgumentMap,
  GraphQLFieldConfigMap,
  GraphQLInputFieldConfig,
  GraphQLInputFieldConfigMap,
  GraphQLObjectType,
} from '../graphql';
import { ComposeInputFieldConfig, ComposeInputFieldConfigMap } from '../InputTypeComposer';
import {
  ComposeFieldConfig,
  ComposeFieldConfigMap,
  ComposeArgumentConfig,
  ComposeFieldConfigArgumentMap,
} from '../ObjectTypeComposer';
import { ComposeObjectType } from '../TypeMapper';
import { Thunk } from './definitions';

export function resolveOutputConfigAsThunk<TSource, TContext>(
  schema: SchemaComposer<TContext>,
  fc: ComposeFieldConfig<TSource, TContext>,
  name: string,
  typeName?: string
): GraphQLFieldConfig<TSource, TContext>;

export function resolveOutputConfigAsThunk<TSource, TContext>(
  schema: SchemaComposer<TContext>,
  fc: ComposeFieldConfig<TSource, TContext>,
  name: string,
  typeName?: string
): GraphQLFieldConfig<TSource, TContext>;

export function resolveOutputConfigMapAsThunk<TSource, TContext>(
  schema: SchemaComposer<TContext>,
  fieldMap: ComposeFieldConfigMap<TSource, TContext>,
  typeName?: string
): GraphQLFieldConfigMap<TSource, TContext>;

export function resolveInputConfigAsThunk(
  schema: SchemaComposer<any>,
  fc: ComposeInputFieldConfig,
  name: string,
  typeName?: string
): GraphQLInputFieldConfig;

export function resolveInputConfigMapAsThunk(
  schema: SchemaComposer<any>,
  fieldMap: ComposeInputFieldConfigMap,
  typeName?: string
): GraphQLInputFieldConfigMap;

export function resolveArgConfigAsThunk(
  schema: SchemaComposer<any>,
  ac: ComposeArgumentConfig,
  name: string,
  fieldName?: string,
  typeName?: string
): GraphQLArgumentConfig;

export function resolveArgConfigMapAsThunk(
  schema: SchemaComposer<any>,
  argMap: ComposeFieldConfigArgumentMap<any>,
  fieldName?: string,
  typeName?: string
): GraphQLFieldConfigArgumentMap;

export function resolveTypeArrayAsThunk(
  schema: SchemaComposer<any>,
  types: Thunk<Array<ComposeObjectType>>,
  typeName?: string
): Array<GraphQLObjectType>;
