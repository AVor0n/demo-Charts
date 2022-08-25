/*Возвращает имена свойств объекта, которые имеют заданный тип*/
export type PropsOfType<O, T> = keyof O extends infer P
? P extends keyof O & string
    ? O[P] extends T
        ? P
        : O[P] extends object
            ? `${P}.${PropsOfType<O[P], T>}`
            : never
    : never
: never