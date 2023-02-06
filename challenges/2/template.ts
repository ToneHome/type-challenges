type MyReturnType<T> = T extends (...args: infer Args) => infer R ? R : never
