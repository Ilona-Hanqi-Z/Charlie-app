import React from 'react';
import { render } from 'react-native-testing-library';
import {DrawerContent} from '../DrawerContent';
import { NavigationContainer } from '@react-navigation/native';

const wrapper = ({ children }) => {
    return (
      <NavigationContainer>
          {children}
      </NavigationContainer>
    )
}

const authContext = React.useMemo(() => ({
    signIn: () => {},
    signOut: () => {},
    signUp: () => {},
  }), []);

test('it renders all inputs as expected', (options)=> {
    const { toJSON } = render(<DrawerContent />, {wrapper: wrapper, ...options});

    expect(toJSON()).toMatchSnapshot();
})