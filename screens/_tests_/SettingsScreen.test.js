import React from 'react';
import { render } from 'react-native-testing-library';
import SettingsScreen from '../SettingsScreen';

test('it renders all inputs as expected', ()=> {
    const { toJSON } = render(<SettingsScreen />);

    expect(toJSON()).toMatchSnapshot();
})