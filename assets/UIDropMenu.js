cc.Class({
    extends: cc.Component,

    properties: {
        currentItemLabel: cc.Label,
        dropItemPrefab: cc.Prefab,
        dropMenuPop: cc.Node,
        dropMenuContent: cc.Node,
        test: false,
        testItems: [cc.String]
    },

    // use this for initialization
    onLoad: function () {
        // this.dropMenuPop.active = false;
        this.currentIdx = -1;
        this.items = [];
        this.dropMenuPop.scale = 0;
        if (this.test) {
            this.generateTestMenu();
        }
    },
    
    generateTestMenu () {
        for (let i = 0; i < this.testItems.length; ++i) {
            let itemName = this.testItems[i];
            this.items.push(itemName);
            let itemN = cc.instantiate(this.dropItemPrefab);
            let item = itemN.getComponent('DropMenuItem');
            item.init(this, i, itemName, (i !== this.testItems.length - 1));
            this.dropMenuContent.addChild(itemN);
        }
        this.onSelect(0);
    },

    onSelect(idx) {
        this.currentIdx = idx;
        this.currentItemLabel.string = this.items[idx];
        this.dropMenuPop.scale = 0;
    },

    onEnable () {
        this.node.on('touchend', this.onClick, this);
    },

    onDisable () {
        this.node.off('touchend', this.onClick, this);
    },

    onClick () {
        this.dropMenuPop.scale = 1;
    }
});
