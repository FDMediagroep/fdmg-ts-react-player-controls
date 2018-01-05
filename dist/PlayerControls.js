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
/**
 * PlayerControls composition - Renders the player's
 * previous, play/pause and next button.
 */
var PlayerControls = /** @class */ (function (_super) {
    __extends(PlayerControls, _super);
    function PlayerControls(props) {
        var _this = _super.call(this, props) || this;
        _this.props = props;
        return _this;
    }
    PlayerControls.prototype.render = function () {
        var previousButton = this.props.showPreviousButton ? (React.createElement("a", { onClick: this.props.onPrevious, className: this.props.previousButtonImageClass ? this.props.previousButtonImageClass : "previous-button" })) : null;
        var playPauseButton = this.props.showPlayPauseButton ? (React.createElement("a", { onClick: this.props.onPlayPause, className: this.props.playPauseButtonImageClass ? this.props.playPauseButtonImageClass : "play-button" })) : null;
        var nextButton = this.props.showNextButton ? (React.createElement("a", { onClick: this.props.onNext, className: this.props.nextButtonImageClass ? this.props.nextButtonImageClass : "next-button" })) : null;
        return (React.createElement("div", { className: this.props.className },
            previousButton,
            playPauseButton,
            nextButton));
    };
    return PlayerControls;
}(React.Component));
exports.default = PlayerControls;
