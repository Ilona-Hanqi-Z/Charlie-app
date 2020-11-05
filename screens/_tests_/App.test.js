import React from 'react';
import { render } from 'react-native-testing-library';
import App from '../../App';

beforeAll(() => { 
    jest.mock('@react-native-community/async-storage');
})

test('it renders all inputs as expected', ()=> {
    const { toJSON } = render(<App />);

    expect(toJSON()).toMatchSnapshot();
})