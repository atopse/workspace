import { Action } from "./action";
/**
 * 驱动器
 */
export class Driver {
    title: string;  //驱动名称,简称
    namespace: string;  //驱动标识符，必须全局唯一。依次同其他驱动器进行区分
    desc: string;  //驱动描述，在使用驱动时，可以显示对驱动的描述，以方便了解驱动功能
    actions: Array<Action>; //驱动器配置信息
}
