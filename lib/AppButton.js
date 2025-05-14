import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from "./AppButtonStyles";

// Create a default placeholder component for when no icon component is provided
const DefaultIconComponent = ({ name, size, color }) => {
  console.warn('No icon component provided. Please pass an iconComponent prop to use icons.');
  return null;
};

const AppButton = ({
  onPress,
  backgroundColor,
  marginHorizontal,
  width,
  marginTop,
  marginBottom,
  marginVertical,
  color,
  fontFamily,
  fontSize,
  disabled,
  height,
  fontWeight,
  borderWidth,
  borderColor,
  borderRadius,
  right,
  position,
  left,
  alignSelf,
  top,
  bottom,
  buttonIcon,
  imageHeight,
  imageWidth,
  imagePath: ImageComponent,
  disabledbackGroundColor,
  disabledTextColor,
  iconComponent,
  buttonColor,
  marginLeft,
  marginRight,
  children,
}) => {
  const IconComponent = iconComponent || DefaultIconComponent;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: disabled ? disabledbackGroundColor : backgroundColor,
          width: width,
          height: height,
          marginTop: marginTop,
          marginBottom: marginBottom,
          borderColor: borderColor,
          borderWidth: borderWidth,
          marginVertical: marginVertical,
          right: right,
          left: left,
          marginHorizontal: marginHorizontal,
          fontWeight: fontWeight,
          position: position,
          top: top,
          alignSelf: alignSelf,
          bottom: bottom,
          borderRadius: borderRadius,
          buttonIcon: buttonIcon,
          marginRight: marginRight,
          marginLeft: marginLeft
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {buttonIcon && iconComponent ? (
        <View style={styles.iconContainer}>
          <IconComponent name={buttonIcon} size={20} color={buttonColor}/>
        </View>
      ) : ImageComponent ? (
        <View style={styles.iconContainer}>
          <ImageComponent width={imageWidth} height={imageHeight} />
        </View>
      ) : null}
      <Text style={[styles.buttonText, {color: disabled ? disabledTextColor : color, fontSize: fontSize, fontWeight: fontWeight, fontFamily: fontFamily}]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;