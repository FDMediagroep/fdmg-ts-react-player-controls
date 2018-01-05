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

    test('renders correctly', () => {
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

        component.setProps({playPauseButtonImageClass: 'play-button'});
        expect(toJson(component)).toMatchSnapshot();

        component.setProps({playPauseButtonImageClass: 'pause-button'});
        expect(toJson(component)).toMatchSnapshot();
    });

    test('buttons clicked', () => {
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

        component.find('a.next-button').simulate('click');
        expect(spyNext).toHaveBeenCalled();
        component.find('a.play-button').simulate('click');
        expect(spyPlay).toHaveBeenCalled();
        component.find('a.previous-button').simulate('click');
        expect(spyPrev).toHaveBeenCalled();

        component.setProps({playPauseButtonImageClass: 'pause-button'});
        component.find('a.pause-button').simulate('click');
        expect(spyPlay).toHaveBeenCalled();
    });

    test('renders previous, next or play/pause button correctly', () => {
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
