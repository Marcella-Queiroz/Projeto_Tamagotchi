import React from 'react';
import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen 
        name="index"
        options={{
          title: "Jogos",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "gamepad-variant" : "gamepad-variant-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="kitchen"
        options={{
          title: 'Cozinha',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'food-drumstick' : 'food-drumstick-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="room"
        options={{
          title: 'Quarto',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'lightbulb' : 'lightbulb-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
