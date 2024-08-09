import { Layers, Node, UITransform } from 'cc'

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
