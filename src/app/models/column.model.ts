import { Tasks } from "./tasks.model";

export class Column {
    constructor(public name: string, public tasks: Tasks[],) {}
}