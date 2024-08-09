import { _decorator, Component, random, resources, SpriteFrame} from 'cc';
const { ccclass, property } = _decorator;

//导入瓦片信息
import { TileManger } from './TileManger';
import { createUINode, randomByRange } from '../../utils';
import DataManager from '../../runtime/DataManager';
import ResourceManager from '../../runtime/ResourceManager';



@ccclass('TileMapManager')
export class TileMapManager extends Component {
    async init(){
        const spriteFrames = await ResourceManager.Instance.loadDir("texture/tile/tile");
        const {mapInfo} = DataManager.Instance;
        DataManager.Instance.tileInfo = [];
        //console.log(spriteFrames);
        for (let i = 0; i < mapInfo.length; i++) {
            const column = mapInfo[i];
            DataManager.Instance.tileInfo[i] = [];
            for (let j = 0; j < column.length; j++) {
                const item = column[j];
                //空值跳过
                if(item.src === null || item.type === null){
                    continue;
                }

                const node = createUINode();

                //随机地板
                let number = item.src;
                if((number === 1 || number === 5 || number === 9) && i%2 === 0 && j%2 === 0){
                    number += randomByRange(0, 4);
                }
                const imageSrc = `tile (${number})`;

                const spriteFrame = spriteFrames.find(v => v.name === imageSrc) || spriteFrames[0];
                
                //添加瓦片管理类，主要是之前太难看得封装一下
                const tileManger = node.addComponent(TileManger);
                const type = item.type;
                tileManger.init(type, spriteFrame, i, j);
                DataManager.Instance.tileInfo[i][j] = tileManger;
                node.setParent(this.node);

                /*封装以下到TileManager类
                //添加UI组件定义大小
                const node = new Node();
                const transform = node.addComponent(UITransform);
                transform.setContentSize(TILE_WIDTH, TILE_HEIGHT);

                //设置layer
                node.layer = 1 << Layers.nameToLayer("UI_2D");

                //设置位置
                node.setPosition(i*TILE_WIDTH, -j*TILE_HEIGHT);
                //挂载到父节点
                node.setParent(this.node);
                */
            }
            
        }
    }
}


