export type LineItem = {
  merchandiseId: string;
  quantity: number;
  attributes?: { key: string; value: string }[];
};

export type UserError = {
  code?: string | null | undefined;
  field?: string[] | null | undefined;
  message: string;
};

export type BarebonesCart = { id: string };

export type NoInfer<T> = [T][T extends any ? 0 : never];

export type OptionalPromise<T> = Promise<T> | T;

// from type-fest
export type OmitIndexSignature<ObjectType> = {
  [KeyType in keyof ObjectType as {} extends Record<KeyType, unknown>
    ? never
    : KeyType]: ObjectType[KeyType];
};
