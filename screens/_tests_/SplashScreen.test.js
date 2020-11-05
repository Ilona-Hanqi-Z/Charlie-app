import React from 'react';
import { render } from 'react-native-testing-library';
import SplashScreen from '../SplashScreen';

test('it renders all inputs as expected', ()=> {
    const { toJSON } = render(<SplashScreen />);

    expect(toJSON()).toMatchSnapshot();
})