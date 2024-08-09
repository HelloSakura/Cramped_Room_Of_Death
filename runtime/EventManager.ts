import Singleton from "../base/Singleton";


interface IItem{
    func: Function;
    ctx: unknown;
}

export default class EventManager extends Singleton{
    static get Instance(){
        return super.GetInstance<EventManager>();
    }

    private eventDic : Map<string, Array<IItem>> = new Map();
    /*JS函数调用非常诡异，地址经常根据调用情况指到不一样的对象上
    需要绑定上下文*/

    //注册绑定，ctx上下文
    on(eventName:string, func:Function, ctx?:unknown){
        if(this.eventDic.has(eventName)){
            this.eventDic.get(eventName).push({func, ctx});
        }
        else{
            this.eventDic.set(eventName, [{func, ctx}]);
        }
    }

    //解绑
    off(eventName: string, func: Function){
        if(this.eventDic.has(eventName)){
            const index = this.eventDic.get(eventName).findIndex(i=>i.func === func);
            //有点意思这写法，利用短路
            index > -1 && this.eventDic.get(eventName).splice(index, 1);
        }
    }

    //触发，补一下参数
    emit(evenName: string, ...params: unknown[]){
        if(this.eventDic.has(evenName)){
            this.eventDic.get(evenName).forEach(({func, ctx}) => {
                ctx ? func.apply(ctx, params) : func(...params);
            })
        }
    }

    //清空
    clear(){
        this.eventDic.clear();
    }
}
