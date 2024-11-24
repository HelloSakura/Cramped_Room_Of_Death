import { EnemyManager } from "../base/EnemyManager";
import Singleton from "../base/Singleton";
import { ITILE } from "../levels";
import { BurstManager } from "../scripts/burst/BurstManager";
import { DoorManager } from "../scripts/door/DoorManager";
import { PlayerManager } from "../scripts/player/PlayerManager";
import { SmokeManager } from "../scripts/smoke/SmokeManager";
import { SpikeManager } from "../scripts/spikes/SpikeManager";
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
    door: DoorManager;
    bursts:BurstManager[];
    enemies: EnemyManager[];
    spikes: SpikeManager[];
    smokes:SmokeManager[];
    
    reset(){
        this.mapInfo = [];
        this.tileInfo = [];
        this.mapColumnCount = 0;
        this.mapRowCount = 0;
        this.player = null;
        this.door = null;
        this.bursts = [];
        this.enemies = [];
        this.spikes = [];
        this.smokes = [];
    }
}

