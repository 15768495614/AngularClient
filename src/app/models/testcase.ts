export interface ITestCase {
    id: string,
    code: string,
    funPoint: string
}

export interface IBase<T> {
    result: T[],
    targetUrl: string,
    success: boolean,
    error: string,
    unAuthorizedRequest: boolean,
    __abp: boolean
}

export class TestCase implements IBase<ITestCase> {
    result: ITestCase[];
    targetUrl: string;
    success: boolean;
    error: string;
    unAuthorizedRequest: boolean;
    __abp: boolean;
    
}