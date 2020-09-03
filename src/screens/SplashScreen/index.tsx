import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet} from 'react-native';

export default function SplashScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.waveContainer}>
        <Image
          style={[styles.wave, {transform: [{rotateY: '180deg'}]}]}
          resizeMode={'cover'}
          source={require('./assets/img/wave-darker.png')}
        />
        <Image
          style={styles.wave}
          resizeMode={'cover'}
          source={require('./assets/img/wave.png')}
        />
      </View>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Microwaves</Text>
        <Text style={styles.credit}>by Lucas Bozzo</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  waveContainer: {
    position: 'relative',
    flexShrink: 1,
    height: '42%',
  },
  wave: {
    flex: 1,
    position: 'absolute',
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    textAlign: 'center',
    fontSize: 32,
    fontFamily: 'Manrope-Bold',
  },
  credit: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Manrope-Medium',
  },
});
