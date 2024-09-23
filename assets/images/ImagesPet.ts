import { ImageSourcePropType } from 'react-native';

export type TamagochiStatus = 
  | 'morto' 
  | 'critico' 
  | 'muito_triste' 
  | 'triste' 
  | 'ok' 
  | 'bem' 
  | 'muito_bem';

export type TamagochiType = 
  | 'Pato' 
  | 'Ganso';

const ImagesPet: Record<TamagochiStatus, Record<TamagochiType, ImageSourcePropType>> = {
  morto: {
    Pato: require('../../assets/images/duckyAnimation-resize.gif'),
    Ganso: require('../../assets/images/ganso.gif'),
  },
  critico: {
    Pato: require('../../assets/images/duckyAnimation-resize.gif'),
    Ganso: require('../../assets/images/ganso.gif'),
  },
  muito_triste: {
    Pato: require('../../assets/images/duckyAnimation-resize.gif'),
    Ganso: require('../../assets/images/ganso.gif'),
  },
  triste: {
    Pato: require('../../assets/images/duckyAnimation-resize.gif'),
    Ganso: require('../../assets/images/ganso.gif'),
  },
  ok: {
    Pato: require('../../assets/images/duckyAnimation-resize.gif'),
    Ganso: require('../../assets/images/ganso.gif'),
  },
  bem: {
    Pato: require('../../assets/images/duckyAnimation-resize.gif'),
    Ganso: require('../../assets/images/ganso.gif'),
  },
  muito_bem: {
    Pato: require('../../assets/images/duckyAnimation-resize.gif'),
    Ganso: require('../../assets/images/ganso.gif'),
  }
};

export { ImagesPet };
