// in the Basics section we got familiar with types, here are more advanced typescript types

// EXAMPLE 1

type ArrElementType<T> = T extends (infer U)[] ? U : T;
// infered examples based on the above type
type Str = ArrElementType<string[]>; // string
type Num = ArrElementType<number[]>; // number
type StrOrNum = ArrElementType<(number | string)[]>; // number | string
type Obj = ArrElementType<{ name: string }>; // { name: string }
