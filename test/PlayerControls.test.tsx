import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import * as React from 'react';
import PlayerControls from "../src/PlayerControls";

console.info = () => {};

describe('PlayerControls', () => {
    const emptyFn = () => {};

    beforeAll(() => {
        Enzyme.configure({ adapter: new Adapter() });
    });

    test('PlayerControls renders correctly', () => {
        const component = shallow(
            <PlayerControls
                showPreviousButton={true}
                showPlayPauseButton={true}
                showNextButton={true}
                onPrevious={emptyFn}
                onPlayPause={emptyFn}
                onNext={emptyFn}
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
        const component = mount(
            <PlayerControls
                showPreviousButton={true}
                showPlayPauseButton={true}
                showNextButton={true}
                onPrevious={spyPrev}
                onPlayPause={spyPlay}
                onNext={spyNext}
            />
        );

        component.find('span.next-button').simulate('click');
        expect(spyNext).toHaveBeenCalled();
        component.find('span.playpause-button').simulate('click');
        expect(spyPlay).toHaveBeenCalled();
        component.find('span.previous-button').simulate('click');
        expect(spyPrev).toHaveBeenCalled();
    });

    test('PlayerControls renders previous, next or play/pause button correctly', () => {
        let component = mount(
            <PlayerControls
                showPreviousButton={true}
                showPlayPauseButton={false}
                showNextButton={false}
                onPrevious={emptyFn}
                onPlayPause={emptyFn}
                onNext={emptyFn}
            />
        );
        expect(toJson(component)).toMatchSnapshot();

        component = mount(
            <PlayerControls
                showPreviousButton={false}
                showPlayPauseButton={true}
                showNextButton={false}
                onPrevious={emptyFn}
                onPlayPause={emptyFn}
                onNext={emptyFn}
            />
        );
        expect(toJson(component)).toMatchSnapshot();

        component = mount(
            <PlayerControls
                showPreviousButton={false}
                showPlayPauseButton={false}
                showNextButton={true}
                onPrevious={emptyFn}
                onPlayPause={emptyFn}
                onNext={emptyFn}
            />
        );
        expect(toJson(component)).toMatchSnapshot();

    });
});
