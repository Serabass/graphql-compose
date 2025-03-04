import {
  GraphQLArgumentConfig,
  GraphQLFieldConfig,
  GraphQLFieldConfigArgumentMap,
  GraphQLInputObjectType,
  GraphQLInputType,
  GraphQLInterfaceType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLOutputType,
  GraphQLResolveInfo,
  GraphQLTypeResolver,
} from 'graphql';
import { InputTypeComposer } from './InputTypeComposer';
import { SchemaComposer } from './SchemaComposer';
import {
  ComposeFieldConfig,
  ComposeFieldConfigMap,
  TypeComposer,
} from './TypeComposer';
import { TypeAsString } from './TypeMapper';
import { Thunk, MaybePromise, Extensions } from './utils/definitions';

export type GraphQLInterfaceTypeExtended<
  TSource,
  TContext
> = GraphQLInterfaceType & {
  _gqcFields?: ComposeFieldConfigMap<TSource, TContext>;
  _gqcInputTypeComposer?: InputTypeComposer;
  _gqcTypeResolvers?: InterfaceTypeResolversMap<TSource, TContext>;
  _gqcExtensions?: Extensions;
};

export type InterfaceTypeResolversMap<TSource, TContext> = Map<
  TypeComposer<any, TContext> | GraphQLObjectType,
  InterfaceTypeResolverCheckFn<TSource, TContext>
>;

export type InterfaceTypeResolverCheckFn<TSource, TContext> = (
  value: TSource,
  context: TContext,
  info: GraphQLResolveInfo,
) => MaybePromise<boolean | null | undefined>;

export type ComposeInterfaceTypeConfig<TSource, TContext> = {
  name: string;
  fields?: Thunk<ComposeFieldConfigMap<TSource, TContext>>;
  resolveType?: GraphQLTypeResolver<TSource, TContext> | null;
  description?: string | null;
  extensions?: Extensions;
};

export type InterfaceTypeComposerDefinition<TContext> =
  | TypeAsString
  | ComposeInterfaceTypeConfig<any, TContext>;

export class InterfaceTypeComposer<TSource = any, TContext = any> {
  public static schemaComposer: SchemaComposer<any>;
  public schemaComposer: SchemaComposer<TSource>;

  protected gqType: GraphQLInterfaceTypeExtended<TSource, TContext>;

  public constructor(gqType: GraphQLInterfaceType);

  public static create<TSrc = any, TCtx = any>(
    typeDef: InterfaceTypeComposerDefinition<TCtx>,
  ): InterfaceTypeComposer<TSrc, TCtx>;

  public static createTemp<TSrc = any, TCtx = any>(
    typeDef: InterfaceTypeComposerDefinition<TCtx>,
  ): InterfaceTypeComposer<TSrc, TCtx>;

  // -----------------------------------------------
  // Field methods
  // -----------------------------------------------

  public hasField(name: string): boolean;

  public getFields(): ComposeFieldConfigMap<TSource, TContext>;

  public getField(name: string): ComposeFieldConfig<TSource, TContext>;

  public getFieldNames(): string[];

  public setFields(fields: ComposeFieldConfigMap<TSource, TContext>): this;

  public setField(
    name: string,
    fieldConfig: ComposeFieldConfig<TSource, TContext>,
  ): this;

  /**
   * Add new fields or replace existed in a GraphQL type
   */
  public addFields(newValues: ComposeFieldConfigMap<TSource, TContext>): this;

  public removeField(nameOrArray: string | string[]): this;

  public removeOtherFields(fieldNameOrArray: string | string[]): this;

  public reorderFields(names: string[]): this;

  public extendField(
    fieldName: string,
    parialFieldConfig: ComposeFieldConfig<TSource, TContext>,
  ): this;

  public isFieldNonNull(fieldName: string): boolean;

  public getFieldConfig(
    fieldName: string,
  ): GraphQLFieldConfig<TSource, TContext>;

  public getFieldType(fieldName: string): GraphQLOutputType;

  public getFieldTC<TSource>(
    fieldName: string,
  ): TypeComposer<TSource, TContext>;

  public makeFieldNonNull(fieldNameOrArray: string | string[]): this;

  public makeFieldNullable(fieldNameOrArray: string | string[]): this;

  public deprecateFields(
    fields: { [fieldName: string]: string } | string[] | string,
  ): this;

  public getFieldArgs(fieldName: string): GraphQLFieldConfigArgumentMap;

  public hasFieldArg(fieldName: string, argName: string): boolean;

  public getFieldArg(fieldName: string, argName: string): GraphQLArgumentConfig;

  public getFieldArgType(fieldName: string, argName: string): GraphQLInputType;

  // -----------------------------------------------
  // Type methods
  // -----------------------------------------------

  public getType(): GraphQLInterfaceType;

  public getTypePlural(): GraphQLList<GraphQLInterfaceType>;

  public getTypeNonNull(): GraphQLNonNull<GraphQLInterfaceType>;

  public getTypeName(): string;

  public setTypeName(name: string): this;

  public getDescription(): string;

  public setDescription(description: string): this;

  public clone(newTypeName: string): this;

  // -----------------------------------------------
  // InputType methods
  // -----------------------------------------------

  public getInputType(): GraphQLInputObjectType;

  public hasInputTypeComposer(): boolean;

  public setInputTypeComposer(itc: InputTypeComposer): this;

  public getInputTypeComposer(): InputTypeComposer;

  public getITC(): InputTypeComposer;

  public removeInputTypeComposer(): this;

  // -----------------------------------------------
  // ResolveType methods
  // -----------------------------------------------

  public getResolveType(): GraphQLTypeResolver<any, TContext> | null | void;

  public setResolveType(
    fn: GraphQLTypeResolver<any, TContext> | null | void,
  ): this;

  public hasTypeResolver(
    type: TypeComposer<any, TContext> | GraphQLObjectType,
  ): boolean;

  public getTypeResolvers(): InterfaceTypeResolversMap<TSource, TContext>;

  public getTypeResolverCheckFn(
    type: TypeComposer<any, TContext> | GraphQLObjectType,
  ): InterfaceTypeResolverCheckFn<any, TContext>;

  public getTypeResolverNames(): string[];

  public getTypeResolverTypes(): GraphQLObjectType[];

  public setTypeResolvers(
    typeResolversMap: InterfaceTypeResolversMap<any, TContext>,
  ): this;

  public addTypeResolver(
    type: TypeComposer<any, TContext> | GraphQLObjectType,
    checkFn: InterfaceTypeResolverCheckFn<any, TContext>,
  ): this;

  public removeTypeResolver(
    type: TypeComposer<any, TContext> | GraphQLObjectType,
  ): this;

  // -----------------------------------------------
  // Extensions methods
  // -----------------------------------------------

  public getExtensions(): Extensions;

  public setExtensions(extensions: Extensions): this;

  public extendExtensions(extensions: Extensions): this;

  public clearExtensions(): this;

  public getExtension(extensionName: string): any;

  public hasExtension(extensionName: string): boolean;

  public setExtension(extensionName: string, value: any): this;

  public removeExtension(extensionName: string): this;

  public getFieldExtensions(fieldName: string): Extensions;

  public setFieldExtensions(fieldName: string, extensions: Extensions): this;

  public extendFieldExtensions(fieldName: string, extensions: Extensions): this;

  public clearFieldExtensions(fieldName: string): this;

  public getFieldExtension(fieldName: string, extensionName: string): any;

  public hasFieldExtension(fieldName: string, extensionName: string): boolean;

  public setFieldExtension(
    fieldName: string,
    extensionName: string,
    value: any,
  ): this;

  public removeFieldExtension(fieldName: string, extensionName: string): this;

  // -----------------------------------------------
  // Misc methods
  // -----------------------------------------------

  public get(path: string | string[]): any;
}
