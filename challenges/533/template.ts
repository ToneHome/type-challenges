type Concat<T extends any[], U extends any[]> = T extends [...infer FirstAry] 
    ? U extends [...infer SecondAry] 
        ? [...FirstAry , ...SecondAry]
        : never
    : never
