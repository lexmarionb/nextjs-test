import { Category,Product } from '@/types/product';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

type PropsWSearchParams = {
    searchParams: SearchParams
}

export type {
    Category,
    Product,
    SearchParams,
    PropsWSearchParams
}