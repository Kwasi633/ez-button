import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import EzButton from 'ez-button';
import LoginStyles from './LoginStyles';
import GoogleLogo from '../../assets/icons/Google.svg'
import Ion from 'react-native-vector-icons/Ionicons'
import Mat from 'react-native-vector-icons/MaterialCommunityIcons'

const Login = ({ navigation}) => {
    const dimensions = useWindowDimensions();
    const styles = LoginStyles(dimensions);

  return (
    <View style={styles.container}>
      <EzButton
        backgroundColor={'#00AEEF'}
        color={'#fff'}
        width={dimensions.width * 0.9}
        height={dimensions.height * 0.065}
        alignSelf='center'
        fontWeight={'600'}
        fontSize={20}
        borderRadius={10}
        marginTop={70}
        onPress={() => navigation.navigate('Welcome')}
      >
        Log In
      </EzButton>

        <EzButton 
        backgroundColor={'#FFF'}
        color={'#00AEEF'}
        width={dimensions.width * 0.9}
        height={dimensions.height * 0.065}
        alignSelf='center'
        borderColor='#00AEEF'
        borderWidth={1}
        marginTop={20}
        fontSize={20}
        fontWeight={'600'}
        borderRadius={10}
        onPress={() => navigation.navigate('Welcome')}
      >
        Sign Up
      </EzButton>

        <View style={styles.socialButtonBox}>
        <EzButton
        width={dimensions.width * 0.4}
        alignSelf='center'
        fontSize={17}
        fontFamily='Poppins-Medium'
        fontWeight={'600'}
        color='#0A1723'
        height={50}
        borderColor='#00AEEF'
        backgroundColor='#ffffff'
        borderRadius={10}
        borderWidth={1}
        buttonIcon={<Ion name={'logo-apple'} size={25} color="#000"/>}
        >
          Apple
        </EzButton>

        <EzButton 
        width={dimensions.width * 0.4}
         alignSelf='center'
         fontSize={17}
         fontWeight={'600'}
         color='#0A1723'
         height={50}
         borderColor='#00AEEF'
         backgroundColor='#ffffff'
         borderRadius={10}
         borderWidth={1}
         imagePath={GoogleLogo}
         imageWidth={20}
         imageHeight={20}
      >
        Google
      </EzButton>
      </View>

       <EzButton
        width={dimensions.width * 0.9}
        alignSelf='center'
        fontSize={17}
        fontFamily='Poppins-Medium'
        fontWeight={'600'}
        height={50}
        backgroundColor={'#F8DE7E'}
        borderRadius={10}
        color={'#000'}
        buttonIcon="crown"
        iconComponent={Mat}
        buttonIconColor="#000"
        buttonIconSize={24}
        >
          Premium
        </EzButton>

        <View style={styles.socialButtonBox}>
        <EzButton
        width={dimensions.width * 0.4}
        alignSelf='center'
        fontSize={17}
        fontFamily='Poppins-Medium'
        fontWeight={'600'}
        color='#0A1723'
        height={50}
        borderColor='#00AEEF'
        backgroundColor='#00aeef'
        borderRadius={10}
        borderWidth={1}
        buttonIcon={<Ion name={'share-social'} size={25} color="#000"/>}
        >
          Share
        </EzButton>

        <EzButton 
        width={dimensions.width * 0.4}
        alignSelf='center'
        fontSize={17}
        fontFamily='Poppins-Medium'
        fontWeight={'600'}
        color='#0A1723'
        height={50}
        borderColor='#00AEEF'
        backgroundColor='#00aeef'
        borderRadius={10}
        borderWidth={1}
        buttonIcon={<Mat name={'download'} size={25} color="#000"/>}
      >
        Download
      </EzButton>
      </View>

      <EzButton
        width={dimensions.width * 0.9}
        alignSelf='center'
        fontSize={17}
        fontFamily='Poppins-Medium'
        fontWeight={'600'}
        height={50}
        backgroundColor={'#00aeef'}
        borderRadius={10}
        color={'#000'}
        buttonIcon={<Ion name={'logo-whatsapp'} size={30} color="#000"/>}
        >
          WhatsApp
        </EzButton>

                <View style={styles.socialButtonBox}>

        <EzButton
        width={dimensions.width * 0.4}
        alignSelf='center'
        fontSize={17}
        fontFamily='Poppins-Medium'
        fontWeight={'600'}
        color='#0A1723'
        height={50}
        backgroundColor='#00aeef'
        borderRadius={10}
        >
          Cancel
        </EzButton>

        <EzButton 
        width={dimensions.width * 0.4}
        alignSelf='center'
        fontSize={17}
        fontFamily='Poppins-Medium'
        fontWeight={'600'}
        color='#0A1723'
        height={50}
        borderColor='#00AEEF'
        backgroundColor='#ff7367'
        borderRadius={10}
      >
        Confirm
      </EzButton>
      </View>

      <View style={styles.socialButtonBox}>
        <EzButton
        backgroundColor={'#00AEEF'}
        color={'#fff'}
        width={dimensions.width * 0.4}
        height={50}
        alignSelf='center'
        fontWeight={'600'}
        fontSize={20}
        borderRadius={10}
        endButtonIcon='person'
        iconComponent={Ion}
        endButtonIconColor="#000"
        endButtonIconSize={24}
      >
        Sign In
      </EzButton>

        <EzButton 
        width={dimensions.width * 0.38}
        alignSelf='center'
        fontSize={17}
        fontFamily='Poppins-Medium'
        fontWeight={'600'}
        color='#fff'
        height={50}
        borderColor='#00AEEF'
        backgroundColor='#00aeef'
        borderRadius={10}
        iconComponent={Ion}
        endButtonIcon='exit'
        endButtonIconSize={24}
        endButtonIconColor="#000"
      >
        Log Out
      </EzButton>
      </View>

       <View style={styles.socialButtonBox}>
        <EzButton
        backgroundColor={'#00AEEF'}
        color={'#fff'}
        width={dimensions.width * 0.4}
        height={50}
        alignSelf='center'
        fontWeight={'600'}
        fontSize={20}
        borderRadius={10}
        endButtonIcon='chevron-forward-outline'
        iconComponent={Ion}
        endButtonIconColor="#000"
        endButtonIconSize={24}
        buttonIcon='settings-sharp'
        buttonIconSize={24}
      >
        Settings
      </EzButton>

        <EzButton 
        width={dimensions.width * 0.38}
        alignSelf='center'
        fontSize={18}
        fontFamily='Poppins-Medium'
        fontWeight={'600'}
        color='#fff'
        height={50}
        borderColor='#00AEEF'
        backgroundColor='#00aeef'
        borderRadius={10}
        iconComponent={Ion}
        endButtonIcon='chevron-forward-outline'
        endButtonIconSize={24}
        endButtonIconColor="#000"
        buttonIcon='cart-sharp'
        buttonIconSize={24}
      >
        Continue
      </EzButton>
      </View>

        <View style={styles.socialButtonBox}>
        <EzButton
        width={dimensions.width * 0.2}
        alignSelf='center'
        fontSize={17}
        fontFamily='Poppins-Medium'
        fontWeight={'600'}
        color='#0A1723'
        height={50}
        borderColor='#00AEEF'
        backgroundColor='#00aeef'
        borderRadius={30}
        >
          All
        </EzButton>

        <EzButton 
        width={dimensions.width * 0.2}
        alignSelf='center'
        fontSize={17}
        fontFamily='Poppins-Medium'
        fontWeight={'600'}
        color='#0A1723'
        height={50}
        borderColor='#00AEEF'
        backgroundColor={'#FFF'}
        borderRadius={30}
        borderWidth={1}
      >
        For You
      </EzButton>

      <EzButton 
        width={dimensions.width * 0.2}
        alignSelf='center'
        fontSize={17}
        fontFamily='Poppins-Medium'
        fontWeight={'600'}
        color='#0A1723'
        height={50}
        borderColor='#00AEEF'
        backgroundColor='#fff'
        borderRadius={30}
        borderWidth={1}
      >
        Explore
      </EzButton>

      <EzButton 
        width={dimensions.width * 0.2}
        alignSelf='center'
        fontSize={17}
        fontFamily='Poppins-Medium'
        fontWeight={'600'}
        color='#0A1723'
        height={50}
        borderColor='#00AEEF'
        backgroundColor='#fff'
        borderRadius={30}
        borderWidth={1}
      >
        Following
      </EzButton>
      </View>
      
      <EzButton
      
      >

      </EzButton>
      
       
      
    </View>
  )
}

export default Login