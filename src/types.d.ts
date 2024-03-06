export interface ClientType {
    id ?: string,
    name: string,
    document: string | number,
    telephone: string,
    email: string,
    active: boolean,
    products?: Array<string>
}

export interface ProductType {
    id ?: string,
    name: string,
    active: boolean
}