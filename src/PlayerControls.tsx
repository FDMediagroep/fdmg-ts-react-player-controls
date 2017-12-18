import * as React from 'react';
import ImageButton from "@fdmg/ts-react-image-button";
import {MouseEvent} from "react";

export interface PlayerControlsProps {
    className?: string;
    showPreviousButton: boolean;
    showPlayPauseButton: boolean;
    showNextButton: boolean;
    previousButtonImage?: string;
    playPauseButtonImage?: string;
    nextButtonImage?: string;
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
                <ImageButton
                    src={this.props.previousButtonImage}
                    onClick={this.props.onPrevious}
                    className="previous-button"
                    alt="previous button"
                />
            ) : null;

        const playPauseButton = this.props.showPlayPauseButton ? (
                <ImageButton
                    src={this.props.playPauseButtonImage}
                    onClick={this.props.onPlayPause}
                    className="playpause-button"
                    alt="play/pause button"
                />
            ) : null;

        const nextButton = this.props.showNextButton ? (
                <ImageButton
                    src={this.props.nextButtonImage}
                    onClick={this.props.onNext}
                    className="next-button"
                    alt="next button"
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
