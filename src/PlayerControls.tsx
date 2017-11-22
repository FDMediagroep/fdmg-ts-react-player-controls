import * as React from 'react';
import ImageButton from "fdmg-ts-react-image-button";

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
    public state: any;
    public props: any;

    constructor(props: PlayerControlsProps) {
        super(props);
        this.props = props;
        console.info('Player controls composition', this.state, this.props);        
    }

    componentDidMount() {
        console.info('Player controls mounted', this.props);
    }
        
    componentWillUnmount() {
        console.info('Player controls will unmount');
    }

    componentWillReceiveProps(nextProps) {
        console.info('Player controls next props', nextProps);
    }

    render() {
        return (
            <div className={this.props.className}>
                {this.props.showPreviousButton?
                    <ImageButton
                        src={this.props.previousButtonImage}
                        onClick={this.props.onPrevious}
                        className="previous-button"
                        alt="previous button"
                    />
                    :null
                }

                {this.props.showPlayPauseButton?
                    <ImageButton
                        src={this.props.playPauseButtonImage}
                        onClick={this.props.onPlayPause}
                        className="playpause-button"
                        alt="play/pause button"
                    />
                    :null
                }

                {this.props.showNextButton?
                    <ImageButton
                        src={this.props.nextButtonImage}
                        onClick={this.props.onNext}
                        className="next-button"
                        alt="next button"
                    />
                    :null
                }
            </div>
        );
    }
}
 