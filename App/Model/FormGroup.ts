import moment from 'moment';
export interface FormGroup {
    id: string | null;
    title: string | null;
    createdDate?: Date | string | moment.Moment;
    lastModifiedDate?: Date | string | moment.Moment;
}

export namespace FormGroup {
    export const Types = ['id', 'title', 'createdDate', 'lastModifiedDate'];
}
