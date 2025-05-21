import { ReactNode, ComponentType } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

interface AppButtonProps {
  onPress: () => void;
  backgroundColor?: string;
  marginHorizontal?: number;
  width?: number | string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  color?: string;
  position?: string;
  fontWeight?: number | string;
  fontFamily?: string;
  borderRadius?: number;
  fontSize?: number;
  disabled?: boolean;
  height?: number | string;
  borderWidth?: number;
  borderColor?: string;
  left?: number;
  buttonIconSize?: number;
  right?: number;
  buttonIconColor?: string;
  alignSelf?: string;
  bottom?: number;
  top?: number;
  marginVertical?: number;
  buttonIcon?: string;
  imageWidth?: number;
  imageHeight?: number;
  iconComponent?: ComponentType<{ name: string; size?: number; color?: string }>;
  imagePath?: ComponentType<{ width?: number; height?: number }>;
  disabledbackGroundColor?: string;
  disabledTextColor?: string;
  endButtonIcon?: string;
  endImagePath?: ComponentType<{ width?: number; height?: number }>;
  endImageHeight?: number;
  endImageWidth?: number;
  endButtonIconColor?: string;
  endButtonIconSize?: number;
  children: ReactNode;
}

declare const AppButton: React.FC<AppButtonProps>;
export default AppButton;