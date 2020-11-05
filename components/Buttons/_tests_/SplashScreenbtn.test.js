import React from 'react';
import {render, fireEvent} from "react-native-testing-library";

import SplashScreen from "../../../screens/SplashScreen";

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

test('can press the button', () => {
   // const onPressMock = jest.fn();

    const { getByText } = render(<SplashScreen />);

    fireEvent.press(getByText("Get Started"));
    expect(onPressMock).toHaveBeenCalled();
    expect(onPressMock.mock.calls.length).toBe(1);

    // fireEvent.press(getByText("Get Started"));
    // expect(onPressMock.mock.calls.length).toBe(2);
})