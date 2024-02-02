/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './app/Navigation';
import {StatusBar} from 'react-native';
import {COLORS} from './app/RootStyles';
import {MainProvider} from './app/context/MainCtx';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <MainProvider>
          <NavigationContainer>
            <StatusBar backgroundColor={COLORS.home} />
            <StackNavigation />
          </NavigationContainer>
        </MainProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
