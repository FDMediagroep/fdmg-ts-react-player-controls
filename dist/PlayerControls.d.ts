/// <reference types="react" />
import * as React from 'react';
export interface PlayerControlsProps {
    className?: string;
    showPreviousButton: boolean;
    showPlayPauseButton: boolean;
    showNextButton: boolean;
    previousButtonImage?: string;
    playPauseButtonImage?: string;
    nextButtonImage?: string;
    onPrevious?: string;
    onPlayPause?: string;
    onNext?: string;
}
/**
 * PlayerControls composition - Renders the player's
 * previous, play/pause and next button.
 */
export default class PlayerControls extends React.Component<PlayerControlsProps, any> {
    state: any;
    props: any;
    constructor(props: PlayerControlsProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
}
