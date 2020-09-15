export class Api {
    /**
     * id
     */
    apiId: string
    /**
     * 集合
     */
    collectionId: string
    /**
     * 名称
     */
    name: string
    /**
     * 方法
     */
    method: RequestMethod
    /**
     * 请求
     */
    request: Request
    /**
     * 响应
     */
    responses: Response[]
}

export class Response {
    result?: string
    desc?: string
    state?: number
    succeed?: boolean
    params?: Param[]
}

export class Request {
    url: string
    method: RequestMethod
    desc?: string
    queries?: Param[]
    auth?: {
        type: AuthType
        value?: Param[]
    }
    headers?: Param[]
    body?: {
        type: string
        param: Param[]
    }
}

export class Param {
    name: string
    value?: string
    sort?: number
    selected?: boolean
    type?: string
    desc?: string
    need?: boolean
}

export enum RequestMethod {
    GET,
    HEAD,
    POST,
    PUT,
    PATCH,
    DELETE,
    OPTIONS,
    TRACE
}

export enum AuthType {
    NO_AUTH,
    BASIC_AUTH,
    BEARER_TOKEN
}

export enum BodyType {
    NONE,
    FORM_DATA,
    X_WWW_FROM_URLENCODED,
    RAW,
    BINARY,

}
