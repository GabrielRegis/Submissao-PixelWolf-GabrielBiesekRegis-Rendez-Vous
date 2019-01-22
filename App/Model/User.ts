export interface User {
    id: string;
    login: string;
    firstName: string;
    lastName: string;
    email: string;
    imageUrl: string;
    langKey: string;
    zonedId: string;
}

export namespace User {
    export const Types = ['id', 'login', 'firstName', 'lastName', 'email', 'imageUrl', 'langKey', 'zonedId'];
}
