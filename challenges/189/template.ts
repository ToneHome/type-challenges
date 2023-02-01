// 类型递归
type waited<T> = T extends Promise<infer K> ? waited<K> : T
// 总类型 t 可以是 promise 也可以是 then 函数
type MyAwaited<T extends Promise<any> | {
    then:(onfulfilled:(arg:any) => any) => any
}> = T extends Promise<infer K> ? waited<K> : T extends {
    then : (onfulfilled: (arg: infer R) => any) => any
} ? R : T 
