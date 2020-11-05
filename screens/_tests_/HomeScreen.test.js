import React from 'react';
import { render } from 'react-native-testing-library';
import HomeScreen from '../HomeScreen';

test('it renders all inputs as expected', ()=> {
    const { toJSON } = render(<HomeScreen />);

    expect(toJSON()).toMatchSnapshot();
})