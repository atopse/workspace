import { Descriptor } from "./descriptor";
/**
 * Action 信息描述
 */
export class Action {
    title: string;
    namespace: string;
    desc: string;
    input: Array<Descriptor>;
    output: Array<Descriptor>;
}
