import React from 'react';
import { render } from 'react-native-testing-library';
import ProfileScreen from '../ProfileScreen';

test('it renders all inputs as expected', ()=> {
    const { toJSON } = render(<ProfileScreen />);

    expect(toJSON()).toMatchSnapshot();
})