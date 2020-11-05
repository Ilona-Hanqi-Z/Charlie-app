import React from 'react';
import { render } from 'react-native-testing-library';
import RootStackScreen from '../RootStackScreen';

import { NavigationContainer } from '@react-navigation/native';

const wrapper = ({ children }) => {
    return (
      <NavigationContainer>
          {children}
      </NavigationContainer>
    )
}

test('it renders all inputs as expected', (options)=> {
    const { toJSON } = render(<RootStackScreen />, {wrapper: wrapper, ...options});

    expect(toJSON()).toMatchSnapshot();
})