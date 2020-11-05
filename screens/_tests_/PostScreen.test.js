import React from 'react';
import { render } from 'react-native-testing-library';
import PostScreen from '../PostScreen';

test('it renders all inputs as expected', ()=> {
    const { toJSON } = render(<PostScreen />);

    expect(toJSON()).toMatchSnapshot();
})