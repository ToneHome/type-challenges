type Includes<T extends readonly any[], U> = T extends [infer First,...infer Rest] 
            ? euqal<First,U> extends true 
                ? true
                : Includes<Rest,U>
            : false 
type s<T> = <M>() => M extends T ? 1 : 2
type euqal<T,K> = (<M>() => M extends T ? 1 : 2) extends (<M>() => M extends K ? 1 : 2) ? true : false
