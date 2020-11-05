import React from 'react';
import { render } from 'react-native-testing-library';
import SignUpScreen from '../SignUpScreen';

test('it renders all inputs as expected', ()=> {
    const { toJSON } = render(<SignUpScreen />);

    expect(toJSON()).toMatchSnapshot();
})