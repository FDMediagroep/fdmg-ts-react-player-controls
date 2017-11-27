"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var fdmg_ts_react_image_button_1 = require("fdmg-ts-react-image-button");
/**
 * PlayerControls composition - Renders the player's
 * previous, play/pause and next button.
 */
var PlayerControls = /** @class */ (function (_super) {
    __extends(PlayerControls, _super);
    function PlayerControls(props) {
        var _this = _super.call(this, props) || this;
        _this.props = props;
        console.info('Player controls composition', _this.state, _this.props);
        return _this;
    }
    PlayerControls.prototype.render = function () {
        return (React.createElement("div", { className: this.props.className },
            this.props.showPreviousButton ?
                React.createElement(fdmg_ts_react_image_button_1.default, { src: this.props.previousButtonImage, onClick: this.props.onPrevious, className: "previous-button", alt: "previous button" })
                : null,
            this.props.showPlayPauseButton ?
                React.createElement(fdmg_ts_react_image_button_1.default, { src: this.props.playPauseButtonImage, onClick: this.props.onPlayPause, className: "playpause-button", alt: "play/pause button" })
                : null,
            this.props.showNextButton ?
                React.createElement(fdmg_ts_react_image_button_1.default, { src: this.props.nextButtonImage, onClick: this.props.onNext, className: "next-button", alt: "next button" })
                : null));
    };
    return PlayerControls;
}(React.Component));
exports.default = PlayerControls;
