import React from 'react';
import {SafeAreaView, View, TextInput, StyleSheet} from 'react-native';
import {Title, Input, Text, Box} from '../../components';

export default function SignInScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Hola!</Title>
      <Text style={styles.p}>Ingresa con tus credenciales.</Text>
      <Box marginTop={3}>
        <Box marginTop={2}>
          <Input label="Correo electronico *" color="secondary" icon={'user'} />
        </Box>
        <Box marginTop={2}>
          <Input label="Contrasena *" color="secondary" icon="at-sign" />
        </Box>
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 12,
  },
  p: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
  },
  inputContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    marginVertical: 5,
  },
  inputLabelWrapper: {
    flexShrink: 1,
    marginVertical: 4,
    marginHorizontal: 2,
  },
  inputLabel: {
    fontFamily: 'Manrope-Bold',
    fontSize: 14,
  },
  inputWrapper: {
    flexShrink: 1,
    flexDirection: 'row',
    backgroundColor: '#ECECEC',
    borderRadius: 4,
    paddingHorizontal: 5,
  },
  input: {
    flex: 1,
    fontFamily: 'Manrope-Medium',
    fontSize: 16,
    lineHeight: 12,
  },
  inputIconWrapper: {
    flexShrink: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 8,
  },
});
