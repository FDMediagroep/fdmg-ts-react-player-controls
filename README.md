> :exclamation: **DEPRECATED** :exclamation:

# fdmg-ts-react-player-controls
[![Build Status](https://travis-ci.org/FDMediagroep/fdmg-ts-react-player-controls.svg?branch=master)](https://travis-ci.org/FDMediagroep/fdmg-ts-react-player-controls)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fdmg-ts-react-player-controls/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fdmg-ts-react-player-controls?branch=master)
[![npm version](https://badge.fury.io/js/%40fdmg%2Fts-react-player-controls.svg)](https://badge.fury.io/js/%40fdmg%2Fts-react-player-controls)


[ReactJS](https://reactjs.org/) PlayerControls component. This component renders a PlayerControls component which consists of the previous, play/pause and next button.

## Installation
- Run `npm i --save-dev @fdmg/ts-react-player-controls`

or

- Run `yarn add @fdmg/ts-react-player-controls --dev`

## Usage
### TypeScript
```
import * as React from 'react';
import PlayerControls from 'fdmg-ts-react-player-controls';

export default class foo {
    public state: any;
    public props: any;

    constructor(props: any) {
        super(props);
        this.props = props;
    }

    previous() {
        console.info('Previous button clicked');
    }

    playPause() {
        console.info('Play/Pause button clicked');
    }

    next() {
        console.info('Next button clicked');
    }
	
    render() {
        return (<PlayerControls
				className="player-controls"
				showPreviousButton={true}
				showPlayPauseButton={true}
				showNextButton={true}
				onPrevious={this.previous.bind(this)}
				onPlayPause={this.playPause.bind(this)}
				onNext={this.next.bind(this)}
				previousButtonImage="img/playercontrols/previous-button.svg"
				playPauseButtonImage="img/playercontrols/play-button.svg"
				nextButtonImage="img/playercontrols/next-button.svg"
			/>
		);
    }
}
```

### Resulting HTML
```
<div class="player-controls">
    <span class="previous-button"
          role="button"
          tabIndex="0"
          aria-label="previous button">
        <img src="img/playercontrols/previous-button.svg" alt="previous button">
    </span>
    <span class="playpause-button"
          role="button"
          tabIndex="0"
          aria-label="play/pause button">
        <img src="img/playercontrols/play-button.svg" alt="play/pause button" class="playpause-button">
    </span>
    <span class="next-button"
          role="button"
          tabIndex="0"
          aria-label="next button">
    	<img src="img/playercontrols/next-button.svg" alt="next button" class="next-button">
    </span>
</div>

```
