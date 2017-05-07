import { Option } from './option'
import { ActionOption } from "./action_option";

export class Box {
    title: string          //魔盒名称,简称
    namespace: string          //魔盒标识符，必须全局唯一。依次同其他魔盒器进行区分
    desc: string          //魔盒描述，在使用魔盒时，可以显示对魔盒的描述，以方便了解魔盒功能
    options: Array<Option> //魔盒器配置信息
    actions: Array<ActionOption>
    input: Map<string, any>
}
