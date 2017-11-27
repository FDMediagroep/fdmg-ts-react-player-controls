/// <reference types="react" />
import * as React from 'react';
import { MouseEvent } from "react";
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
    state: any;
    props: any;
    constructor(props: PlayerControlsProps);
    render(): JSX.Element;
}
