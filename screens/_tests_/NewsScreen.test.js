import React from 'react';
import { render } from 'react-native-testing-library';
import NewsScreen from '../NewsScreen';

test('it renders all inputs as expected', ()=> {
    const { toJSON } = render(<NewsScreen />);

    expect(toJSON()).toMatchSnapshot();
})