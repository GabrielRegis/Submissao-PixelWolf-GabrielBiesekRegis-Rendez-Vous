export interface ResultPage<T> {
    number: number;
    size: number;
    totalPages: number;
    numberOfElements: number;
    totalElements: number;
    previousPage: boolean;
    firstPage: boolean;
    nextPage: boolean;
    lastPage: boolean;
    content: T[];
}
