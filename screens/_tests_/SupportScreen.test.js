import React from 'react';
import { render } from 'react-native-testing-library';
import SupportScreen from '../SupportScreen';

test('it renders all inputs as expected', ()=> {
    const { toJSON } = render(<SupportScreen />);

    expect(toJSON()).toMatchSnapshot();
})