import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../../scss/PlayerControls.scss';
import '../../img/playercontrols/next-button.svg';
import '../../img/playercontrols/pause-button.svg';
import '../../img/playercontrols/play-button.svg';
import '../../img/playercontrols/previous-button.svg';
import PlayerControls from '../../src/PlayerControls';

// Render react components.
ReactDOM.render(
    <PlayerControls
        playPauseButtonImage='img/playercontrols/play-button.svg'
        nextButtonImage='img/playercontrols/next-button.svg'
        previousButtonImage='img/playercontrols/previous-button.svg'
        className='player-controls'
        showPreviousButton={true}
        showPlayPauseButton={true}
        showNextButton={true}
        onPrevious={() => { alert('previous') }}
        onPlayPause={() => { alert('play/pause') }}
        onNext={() => {alert('next') }}
    />,
    document.getElementById('root')
);
