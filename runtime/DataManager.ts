import Singleton from "../base/Singleton";
import { ITILE } from "../levels";
import { PlayerManager } from "../scripts/player/PlayerManager";
import { TileManger } from "../scripts/tile/TileManger";
import { WoodenSkeletonManager } from "../scripts/woodenSkeleton/WoodenSkeletonManager";

export default class DataManager extends Singleton{
    static get Instance(){
        return super.GetInstance<DataManager>();
    }
    
    mapInfo: Array<Array<ITILE>>;
    tileInfo: Array<Array<TileManger>>;
    mapRowCount: number = 0;
    mapColumnCount: number = 0;
    levelIndex: number = 1;
    player: PlayerManager;
    enemies: WoodenSkeletonManager[];
    
    reset(){
        this.mapInfo = [];
        this.tileInfo = [];
        this.mapColumnCount = 0;
        this.mapRowCount = 0;
        this.player = null;
        this.enemies = [];
    }
}

