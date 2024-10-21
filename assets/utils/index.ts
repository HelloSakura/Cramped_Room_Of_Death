import { Layers, Node, SpriteFrame, UITransform } from 'cc'

//常用功能封装成函数
export const createUINode = (name:string = '')=>{
    const node = new Node(name);
    
    //添加UI组件
    const transform = node.addComponent(UITransform);
    //设置左上角为原点
    transform.setAnchorPoint(0,1);
    //设置layer
    node.layer = 1 << Layers.nameToLayer("UI_2D");

    return node;
}




//根据参数范围返回随机数
export const randomByRange = (start: number, end: number) => Math.floor(start + (end - start) * Math.random())


//根据spriteFrame进行正则排序
const reg = /\((\d+)\)/
const getNumberWithinString = (str:string) => parseInt(str.match(reg)[1] || '0')

export const sortSpriteFrame = (spriteFrames: SpriteFrame[])=>{
    spriteFrames.sort((a,b)=>getNumberWithinString(a.name) - getNumberWithinString(b.name));
}


//根据长度生成随机字符串
export const randomByLen = (len:number) => Array.from({length:len}).reduce<string>((total:string, item)=>total+Math.floor(Math.random()*10), '');
