import React from 'react';
import { render } from 'react-native-testing-library';
import MapScreen from '../MapScreen';

test('it renders all inputs as expected', ()=> {
    const { toJSON } = render(<MapScreen />);

    expect(toJSON()).toMatchSnapshot();
})