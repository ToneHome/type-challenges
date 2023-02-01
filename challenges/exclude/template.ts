type MyExclude<T, U> =  T extends U ? never : T

type r = MyExclude<'1' | '2','1'>

type r2 = '2' | '1' extends '1' ? true: false

type r3 = never | '1'

// type ObjExclude<T,U> = {
//     [K in (keyof T extends U ? never : keyof T)]
// }