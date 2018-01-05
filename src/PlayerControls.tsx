import * as React from 'react';
import {MouseEvent} from "react";

export interface PlayerControlsProps {
    className?: string;
    showPreviousButton: boolean;
    showPlayPauseButton: boolean;
    showNextButton: boolean;
    previousButtonImageClass?: string;
    playPauseButtonClass?: string;
    nextButtonImageClass?: string;
    onPrevious?: (event: MouseEvent<HTMLImageElement>) => void;
    onPlayPause?: (event: MouseEvent<HTMLImageElement>) => void;
    onNext?: (event: MouseEvent<HTMLImageElement>) => void;
}

/**
 * PlayerControls composition - Renders the player's
 * previous, play/pause and next button.
 */
export default class PlayerControls extends React.Component<PlayerControlsProps, any> {
    public state: any;
    public props: any;

    constructor(props: PlayerControlsProps) {
        super(props);
        this.props = props;
    }

    render() {
        const previousButton = this.props.showPreviousButton ? (
                <a
                    onClick={this.props.onPrevious}
                    className={this.props.previousButtonImageClass ? this.props.previousButtonImageClass : "previous-button"}
                />
            ) : null;

        const playPauseButton = this.props.showPlayPauseButton ? (
                <a
                    onClick={this.props.onPlayPause}
                    className={this.props.playPauseButtonImageClass ? this.props.playPauseButtonImageClass : "play-button"}
                />
            ) : null;

        const nextButton = this.props.showNextButton ? (
                <a
                    onClick={this.props.onNext}
                    className={this.props.nextButtonImageClass ? this.props.nextButtonImageClass : "next-button"}
                />
            ) : null;

        return (
            <div className={this.props.className}>
                {previousButton}

                {playPauseButton}

                {nextButton}
            </div>
        );
    }
}
