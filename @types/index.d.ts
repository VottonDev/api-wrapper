type Request = typeof import('request');

type PathVars = string[];

interface ParseResult {
  withoutParams: string;
  params: string[];
  pathVars: PathVars;
}

interface RequestOptions {
  [key: string]: any;
}

interface WrapperFn {
  (args: any, body?: any, moreRequestOptions?: RequestOptions, cb?: (error: any, message: any, body: any) => void): any;
  (args: any, moreRequestOptions?: RequestOptions, cb?: (error: any, message: any, body: any) => void): any;
}

interface Config {
  root: string;
  parseJson: boolean;
  requestDefaults: RequestOptions;
  delete?: {
    [key: string]: string;
  };
  get?: {
    [key: string]: string;
  };
  head?: {
    [key: string]: string;
  };
  patch?: {
    [key: string]: string;
  };
  post?: {
    [key: string]: string;
  };
  put?: {
    [key: string]: string;
  };
}

declare function create(config: Config): any;

declare namespace create {
  export function getPathVars(path: string): PathVars;
  export function parse(pathPattern: string): ParseResult;
  export function uriJoin(a: string, b: string): string;
  export function buildUri(root: string, args: any, parseResult: ParseResult): string;
  export function buildWrapperFn(
    root: string,
    parseResult: ParseResult,
    method: string,
    requestModule: Request,
    requestOptions: RequestOptions,
    shouldParseJson: boolean
  ): WrapperFn;
  export function getParseJsonFn(cb: (error: any, message: any, body: any) => void): (error: any, message: any, body: string) => void;
  export function getMethodIterator(config: Config, cb: (method: string, key: string, value: string) => void): void;
}

export function create(config: Config): any;

export default function wrapper(config: Config): any;
