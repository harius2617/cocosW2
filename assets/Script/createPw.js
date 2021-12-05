// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        tooltip: cc.Label,
    },

    onLoad(){
        this.tooltip.node.active = false;
    },

    editbegan(){
        if(this.node.getComponent(cc.EditBox).string.length == 0){
            this.tooltip.string = "Password must have at least one UPPERCASE and one NUMBER"
            this.tooltip.node.active = true;
        }
    },

    ruleCheck(){
        if(this.node.getComponent(cc.EditBox).string.match(/[0-9]/gm) && this.node.getComponent(cc.EditBox).string.match(/[A-Z]/gm)){
            this.tooltip.string = "Correct"
        } else {
            this.tooltip.string = "Wrong"
        }
    }
   
});
