import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  index: undefined;
  SelectionPet: undefined;
  NewPet: undefined;
  '(tabs)': undefined;
  '+not-found': undefined;
};

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;
