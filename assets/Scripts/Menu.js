const DropMenu = require('UIDropMenu');

cc.Class({
    extends: cc.Component,

    properties: {
        selectors: [DropMenu],
        timerProgress: cc.ProgressBar,
        display: cc.Label
    },

    // use this for initialization
    onLoad: function () {
        this.display.string = 'Hello Fuck!';
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
