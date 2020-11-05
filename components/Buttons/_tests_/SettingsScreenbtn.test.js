import React from 'react';
import {render, fireEvent} from "react-native-testing-library";

import SettingsScreen from "../../../screens/SettingsScreen";
import { Alert } from 'react-native';

jest.spyOn(Alert, 'alert');

test('can press the button', () => {
    const { getByText } = render(<SettingsScreen />);

    fireEvent.press(getByText("Click Here"));
    expect(Alert.alert).toHaveBeenCalledWith('Button Clicked!');
})