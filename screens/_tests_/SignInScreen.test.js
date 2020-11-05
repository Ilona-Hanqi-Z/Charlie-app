import React from 'react';
import { render } from 'react-native-testing-library';
import SignInScreen from '../SignInScreen';

test('it renders all inputs as expected', ()=> {
    const { toJSON } = render(<SignInScreen />);

    expect(toJSON()).toMatchSnapshot();
})