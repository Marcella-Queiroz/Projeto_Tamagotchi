import { ImagesPet, TamagochiStatus, TamagochiType } from '../../assets/images/ImagesPet';
import { ImageSourcePropType } from "react-native";

export function getPetImage(status: TamagochiStatus, tamagochiType: TamagochiType): ImageSourcePropType {
    return ImagesPet[status][tamagochiType];
}

