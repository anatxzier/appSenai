import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Appearance } from 'react-native';
import { Camera } from 'expo-camera';
import useColor from '../../Temas/Temas';

export default function Scanner() {
  const camRef = useRef(null);
  const color = useColor(); 
  const [hasPermission, setHasPermission] = useState(false);
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color.bgPrimary
    },
    camera: {
      width: 450,
      height: 450,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 20,
      left: 20,
    },
    button: {
      padding: 20,
      backgroundColor: color.bgSecundary,
      borderRadius: 10,
    },
    text: {
      fontSize: 20,
      color: color.bgPrimary, 
    },
  });
  
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(String(status) === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>Acesso negado!</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} ref={camRef}></Camera>
    </SafeAreaView>
  );
}
