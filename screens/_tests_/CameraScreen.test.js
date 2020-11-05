import React from 'react';
import { render } from 'react-native-testing-library';
import CameraScreen from '../CameraScreen';

test('it renders all inputs as expected', ()=> {
    const { toJSON } = render(<CameraScreen />);

    expect(toJSON()).toMatchSnapshot();
})