import { Tabs } from 'expo-router';
import React from 'react';

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
        title:"Jogos",
        tabBarIcon:({color,focused}) => (
          <TabBarIcon name={focused ? "balloon" : "balloon-outline"} color={color} />//Mudar Icone
                            //Icone preenchido --  Icone vazio
        ),
      }}/>
      <Tabs.Screen
        name="kitchen"
        options={{
          title: 'Cozinha',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />//Mudar Icone
          ),
        }}
      />
      <Tabs.Screen
        name="room"
        options={{
          title: 'Quarto',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />//Mudar Icone
          ),
        }}
      />
    </Tabs>
  );
}
