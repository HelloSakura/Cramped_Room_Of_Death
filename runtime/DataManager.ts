import Singleton from "../base/Singleton";
import { ITILE } from "../levels";
import { TileManger } from "../scripts/tile/TileManger";

export default class DataManager extends Singleton{
    static get Instance(){
        return super.GetInstance<DataManager>();
    }
    
    mapInfo: Array<Array<ITILE>>;
    tileInfo: Array<Array<TileManger>>;
    mapRowCount: number = 0;
    mapColumnCount: number = 0;
    levelIndex: number = 1;
    
    reset(){
        this.mapInfo = [];
        this.tileInfo = [];
        this.mapColumnCount = 0;
        this.mapRowCount = 0;
    }
}

