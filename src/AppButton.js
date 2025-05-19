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
}) => {
  const IconComponent = iconComponent || DefaultIconComponent;
  
  // Determine if imagePath is an SVG component or a PNG/image source
  const isImageComponent = typeof imagePath === 'function' || (typeof imagePath === 'object' && imagePath !== null);
  
  // Determine if buttonIcon is a string or a component
  const isButtonIconComponent = typeof buttonIcon === 'object' && buttonIcon !== null && !Array.isArray(buttonIcon);
  
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
        // If buttonIcon is a React component (like <Eye name={'add'} size={30} color="red"/>)
        <View style={styles.iconContainer}>
          {buttonIcon}
        </View>
      ) : buttonIcon && iconComponent ? (
        // If buttonIcon is a string and iconComponent is provided
        <View style={styles.iconContainer}>
          <IconComponent name={buttonIcon} size={buttonIconSize} color={buttonIconColor}/>
        </View>
      ) : imagePath ? (
        <View style={styles.iconContainer}>
          {isImageComponent ? (
            // If it's an SVG Component
            React.createElement(imagePath, { width: imageWidth, height: imageHeight })
          ) : (
            // If it's a regular image source (PNG, JPG, etc.)
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
    </TouchableOpacity>
  );
};

export default AppButton;