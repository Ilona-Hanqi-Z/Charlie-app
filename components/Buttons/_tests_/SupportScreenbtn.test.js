import React from 'react';
import {render, fireEvent} from "react-native-testing-library";

import SupportScreen from "../../../screens/SupportScreen";
import { Alert } from 'react-native';

jest.spyOn(Alert, 'alert');

test('can press the button', () => {
    const { getByText } = render(<SupportScreen />);

    fireEvent.press(getByText("Click Here"));
    expect(Alert.alert).toHaveBeenCalledWith('Button Clicked!');


    // fireEvent.press(getByText("Get Started"));
    // expect(onPressMock.mock.calls.length).toBe(2);
})