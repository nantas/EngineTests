cc.Class({
    extends: cc.Component,

    editor: {
        executeInEditMode: true,
    },

    properties: {
        checked: {
            type: cc.Boolean,
            default: false,
            notify: function (oldValue) {
                this.updateSprite(oldValue);
            }
        },
        sprite: cc.Sprite,
        texOn: cc.SpriteFrame,
        texOff: cc.SpriteFrame,
        clickEvents: [cc.Component.EventHandler]
    },

    // use this for initialization
    onLoad: function () {
        this.updateSprite();
    },

    updateSprite (oldValue) {
        if (oldValue === this.checked) return;
        if (this.checked) {
            this.sprite.spriteFrame = this.texOn;
        } else {
            this.sprite.spriteFrame = this.texOff;
        }
    },

    onEnable () {
        this.node.on('touchend', this.onClick, this);
    },

    onDisable () {
        this.node.off('touchend', this.onClick, this);
    },

    onClick () {
        this.checked = !this.checked;
    }


    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
