import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import "../global.css"

/**
 * RootLayout component that defines the main layout of the application.
 * It includes the StatusBar and the Stack navigator for handling different screens.
 */
const RootLayout = () => {
  return (
      <>
        {/* StatusBar configuration */}
        <StatusBar style="auto" />

        {/* Stack navigator configuration */}
        <Stack
            screenOptions={{
              headerShown: false, // Hide headers for all screens by default
            }}
        >
          {/* Auth Stack */}
          <Stack.Screen
              name="(auth)"
              options={{
                headerShown: false, // Hide header for auth screens
                //gestureEnabled: false // Uncomment to disable swipe gestures for auth screens
              }}
          />


          </Stack>
      </>
  );
};

export default RootLayout;