import React from 'react';
import { render } from 'react-native-testing-library';
import MainTabScreen from '../MainTabScreen';
import { NavigationContainer } from '@react-navigation/native';

const wrapper = ({ children }) => {
    return (
      <NavigationContainer>
          {children}
      </NavigationContainer>
    )
}

test('it renders all inputs as expected', (options)=> {
    const { toJSON } = render(<MainTabScreen />, {wrapper: wrapper, ...options});

    expect(toJSON()).toMatchSnapshot();
})