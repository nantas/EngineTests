cc.Class({
    extends: cc.Component,

    properties: {
        currentItemLabel: cc.Label,
        dropItemPrefab: cc.Prefab,
        dropMenuPop: cc.Node,
        dropMenuContent: cc.Node,
        test: false,
        items: [cc.String]
    },

    // use this for initialization
    onLoad: function () {
        // this.dropMenuPop.active = false;
        this.currentIdx = -1;
        this.dropMenuPop.active = false;
        if (this.test) {
            this.initMenu();
        }
    },
    
    initMenu (inputItems) {
        if (inputItems) {
            this.items = inputItems;
        }
        for (let i = 0; i < this.items.length; ++i) {
            let itemName = this.items[i];
            let itemN = cc.instantiate(this.dropItemPrefab);
            let item = itemN.getComponent('DropMenuItem');
            item.init(this, i, itemName, (i !== this.items.length - 1));
            this.dropMenuContent.addChild(itemN);
        }
        this.onSelect(0);
    },

    onSelect(idx) {
        this.currentIdx = idx;
        this.currentItemLabel.string = this.items[idx];
        this.dropMenuPop.active = false;
    },

    onEnable () {
        this.node.on('touchend', this.onClick, this);
    },

    onDisable () {
        this.node.off('touchend', this.onClick, this);
    },

    onClick (event) {
        if (event.target === event.currentTarget) {
            this.dropMenuPop.active = true;
        }
    }
});
