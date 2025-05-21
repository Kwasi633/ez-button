import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import styles from "./AppButtonStyles";

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
  imagePath,
  disabledbackGroundColor,
  disabledTextColor,
  iconComponent,
  buttonIconColor,
  buttonIconSize,
  marginLeft,
  marginRight,
  children,
  endButtonIcon,
  endImagePath,
  endImageHeight,
  endImageWidth,
  endButtonIconColor,
  endButtonIconSize,
}) => {
  const IconComponent = iconComponent || DefaultIconComponent;
  const isImageComponent = typeof imagePath === 'function' || (typeof imagePath === 'object' && imagePath !== null);
  const isButtonIconComponent = typeof buttonIcon === 'object' && buttonIcon !== null && !Array.isArray(buttonIcon);
  
  const isEndImageComponent = typeof endImagePath === 'function' || (typeof endImagePath === 'object' && endImagePath !== null);
  const isEndButtonIconComponent = typeof endButtonIcon === 'object' && endButtonIcon !== null && !Array.isArray(endButtonIcon);

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
          marginRight: marginRight,
          marginLeft: marginLeft
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {isButtonIconComponent ? (
        <View style={styles.iconContainer}>
          {buttonIcon}
        </View>
      ) : buttonIcon && iconComponent ? (
        <View style={styles.iconContainer}>
          <IconComponent name={buttonIcon} size={buttonIconSize} color={buttonIconColor}/>
        </View>
      ) : imagePath ? (
        <View style={styles.iconContainer}>
          {isImageComponent ? (
            React.createElement(imagePath, { width: imageWidth, height: imageHeight })
          ) : (
            <Image
              source={imagePath}
              style={{ width: imageWidth, height: imageHeight }}
            />
          )}
        </View>
      ) : null}
      
      <Text style={[styles.buttonText, {color: disabled ? disabledTextColor : color, fontSize: fontSize, fontWeight: fontWeight, fontFamily: fontFamily}]}>
        {children}
      </Text>
      
      {isEndButtonIconComponent ? (
        <View style={styles.iconContainer}>
          {endButtonIcon}
        </View>
      ) : endButtonIcon && iconComponent ? (
        <View style={styles.iconContainer}>
          <IconComponent name={endButtonIcon} size={endButtonIconSize || buttonIconSize} color={endButtonIconColor || buttonIconColor}/>
        </View>
      ) : endImagePath ? (
        <View style={styles.iconContainer}>
          {isEndImageComponent ? (
            React.createElement(endImagePath, { width: endImageWidth || imageWidth, height: endImageHeight || imageHeight })
          ) : (
            <Image
              source={endImagePath}
              style={{ width: endImageWidth || imageWidth, height: endImageHeight || imageHeight }}
            />
          )}
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default AppButton;