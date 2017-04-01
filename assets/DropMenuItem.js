cc.Class({
    extends: cc.Component,

    properties: {
        label: cc.Label,
        divider: cc.Sprite,
        highlight: cc.Sprite,
    },

    // use this for initialization
    init (dropMenu, index, text, showDivider) {
        this.dropMenu = dropMenu;
        this.index = index;
        this.label.string = text;
        this.divider.enabled = showDivider;
        this.toggleHighlight(false);
        this.node.on('touchstart', this.onHover, this);
        this.node.on('touchend', this.onClick, this);
        this.node.on('mouseenter', this.onHover, this);
        this.node.on('mouseleave', this.onLeave, this);
    },

    toggleHighlight (on) {
        this.highlight.enabled = on;
        this.label.node.color = on ? cc.Color.WHITE : cc.Color.BLACK;
    },

    onClick (event) {
        this.onLeave();
        this.dropMenu.onSelect(this.index);
    },

    onHover () {
        this.toggleHighlight(true);
    },

    onLeave() {
        this.toggleHighlight(false);
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
