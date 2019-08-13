import {PoolManager} from "../../manager/PoolManager";
import {EnemyManager} from "../../manager/EnemyManager";

/**
 * creator: yisha
 */


const {ccclass, property} = cc._decorator;

@ccclass
export default class SmallHP extends cc.Component {

    onCollisionEnter(other,self){
        if(other.node.group == "player"){
            if(other.tag == 100){
                PoolManager.getInstance().put("smallHPPool",this.node,10);
            }
        }
    }

    // onLoad () {}

    start () {

    }

    update (dt) {
        if(EnemyManager.getInstance().enemyArr.length == 0){
            PoolManager.getInstance().put("smallHPPool",this.node,10);
        }
    }
}