import { StyleSheet,Text, View, Image, ActivityIndicatorBase, ActivityIndicator } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import imagesPath from '@/src/constants/imagesPath';
import { router } from 'expo-router';

const Login = () => {
  const [isroute, setIsRoute] = React.useState(true);
  
  React.useEffect(() => {
    const timeout= setTimeout(() => {
      setIsRoute(false);
      setTimeout(() => {
        router.push('/termsAgreement');
      }, 1000);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    }
  }, );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image source={imagesPath.logo} style={styles.logoStyles} resizeMode='contain'/>
        <Text style={styles.whatsappText}>Whatsapp</Text>
      </View>
      <View style={styles.footer}>
        {isroute ?
        <>
        <Text style={styles.fromText}>from</Text>
        <Text style={styles.facebookText}>Facebook</Text> 
        </> : <>
          <ActivityIndicator size={scale(30)} color={'black'}/>
          <Text style={styles.fromText}>Loading</Text>
        </>
        }
      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white ',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(50),
  },

  header:{
    
  },

  body:{
    alignItems: 'center',
    gap: verticalScale(10),
  },

  footer:{
    alignItems: 'center', 
    height: verticalScale(50),
    justifyContent: 'flex-end',
  },

  fromText:{
      fontSize: moderateScale(12),
      color: '#867373 ',
  },

  facebookText:{
    fontSize: moderateScale(15),
    fontWeight: 'bold',
    color: 'black' ,
  },

  logoStyles:{
    width: scale(50),
    height: verticalScale(50),
    resizeMode: 'contain',
  },

  whatsappText:{
    fontSize: moderateScale(35),
    fontWeight: "900", 
    color: 'black',
  },
})