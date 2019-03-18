import { GraphQLObjectType, GraphQLInputObjectType, getNamedType } from '../graphql';
import { GraphQLInputType, GraphQLOutputType } from '../graphql';
import { ObjectTypeComposer, ArgsMap } from '../ObjectTypeComposer';
import { InputTypeComposer } from '../InputTypeComposer';
import { InterfaceTypeComposer } from '../InterfaceTypeComposer';
import { UnionTypeComposer } from '../UnionTypeComposer';
import { Resolver } from '../Resolver';
import { SchemaComposer } from '../SchemaComposer';

export function typeByPath(
  src:
    | ObjectTypeComposer<any, any>
    | InputTypeComposer
    | Resolver<any, any, any>
    | InterfaceTypeComposer<any, any>
    | UnionTypeComposer<any, any>,
  path: string | Array<string>
): any;

export function typeByPathTC(
  tc: ObjectTypeComposer<any, any>,
  parts: Array<string>
): undefined | ObjectTypeComposer<any, any> | Resolver<any, any, ArgsMap>;

export function typeByPathITC(itc: InputTypeComposer, parts: Array<string>): any;

export function typeByPathIFTC(
  tc: InterfaceTypeComposer<any, any>,
  parts: Array<string>
): undefined | InterfaceTypeComposer<any, any> | any;

export function processType(
  type: GraphQLOutputType | GraphQLInputType | void | null,
  restParts: Array<string>,
  schema: SchemaComposer<any>
): undefined | InputTypeComposer | any;

