import { TodoCategory } from './TodoCategory';

export interface Todo {
    id?: string;
    title?: string;
    description?: string;
    category?: TodoCategory;
    date?: Date;
    isChecked?: boolean;
}
