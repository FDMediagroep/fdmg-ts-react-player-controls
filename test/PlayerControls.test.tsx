import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import * as React from 'react';
import PlayerControls from "../src/PlayerControls";

console.info = function() {};

beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
});

test('PlayerControls renders correctly', () => {
    let component = shallow(
        <PlayerControls
            showPreviousButton={true}
            showPlayPauseButton={true}
            showNextButton={true}
            onPrevious={()=>{}}
            onPlayPause={()=>{}}
            onNext={()=>{}}
        />
    );
    expect(toJson(component)).toMatchSnapshot();

    component.setProps({playPauseButtonImage: 'img/playercontrols/play-button.tsx'});
    expect(toJson(component)).toMatchSnapshot();
});

test('PlayerControls buttons clicked', () => {
    const spyPrev = jest.fn();
    const spyPlay = jest.fn();
    const spyNext = jest.fn();
    let component = mount(
        <PlayerControls
            showPreviousButton={true}
            showPlayPauseButton={true}
            showNextButton={true}
            onPrevious={spyPrev}
            onPlayPause={spyPlay}
            onNext={spyNext}
        />
    );

    component.find('img.next-button').simulate('click');
    expect(spyNext).toHaveBeenCalled();
    component.find('img.playpause-button').simulate('click');
    expect(spyPlay).toHaveBeenCalled();
    component.find('img.previous-button').simulate('click');
    expect(spyPrev).toHaveBeenCalled();
});

test('PlayerControls renders previous, next or play/pause button correctly', () => {
    let component = shallow(
        <PlayerControls
            showPreviousButton={true}
            showPlayPauseButton={false}
            showNextButton={false}
            onPrevious={()=>{}}
            onPlayPause={()=>{}}
            onNext={()=>{}}
        />
    );
    expect(toJson(component)).toMatchSnapshot();

    component = shallow(
        <PlayerControls
            showPreviousButton={false}
            showPlayPauseButton={true}
            showNextButton={false}
            onPrevious={()=>{}}
            onPlayPause={()=>{}}
            onNext={()=>{}}
        />
    );
    expect(toJson(component)).toMatchSnapshot();

    component = shallow(
        <PlayerControls
            showPreviousButton={false}
            showPlayPauseButton={false}
            showNextButton={true}
            onPrevious={()=>{}}
            onPlayPause={()=>{}}
            onNext={()=>{}}
        />
    );
    expect(toJson(component)).toMatchSnapshot();

});
