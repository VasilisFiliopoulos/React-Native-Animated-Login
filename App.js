/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  Animated,
  TextInput,
} from 'react-native';

const {height} = Dimensions.get('window');

const App: () => React$Node = () => {
  const buttonOpacity = useRef(new Animated.Value(1)).current;

  const onClick = () => {
    Animated.timing(buttonOpacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const bgY = buttonOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [-height / 2.7, 0],
    extrapolate: 'clamp',
  });

  const buttonY = buttonOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [1, -1],
    extrapolate: 'clamp',
  });

  const textInputZindex = buttonOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
    extrapolate: 'clamp',
  });

  const textInputY = buttonOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const textInputOpacity = buttonOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const rotateCross = buttonOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
    extrapolate: 'clamp',
  });

  const isEditable = buttonOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const onCloseState = () => {
    Animated.timing(buttonOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.imageContainer, {transform: [{translateY: bgY}]}]}>
        <Image style={styles.image} source={require('./image.jpeg')} />
      </Animated.View>

      <View style={styles.buttonContainer}>
        <Animated.View
          style={{opacity: buttonOpacity, transform: [{translateY: buttonY}]}}>
          <TouchableOpacity
            onPress={onClick}
            activeOpacity={1}
            style={[styles.button, {backgroundColor: 'white'}]}>
            <Text style={styles.text}>SIGN IN</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={{opacity: buttonOpacity, transform: [{translateY: buttonY}]}}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#3b5998'}]}>
            <Text style={[styles.text, {color: 'white'}]}>
              SIGN IN WITH FACEBOOK
            </Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={{
            zIndex: textInputZindex,
            opacity: textInputOpacity,
            transform: [{translateY: textInputY}],
            height: height / 3,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
          }}>
          <TouchableOpacity onPress={onCloseState} style={styles.closeButtonContainer}>
            <Animated.View style={styles.closeButton}>
              <Animated.Text
                style={{
                  fontSize: 15,
                  transform: [{rotate: rotateCross}],
                }}>
                X
              </Animated.Text>
            </Animated.View>
          </TouchableOpacity>

          <TextInput
            placeholder="EMAIL"
            style={[
              styles.textInput,
              {
                height: isEditable ? 50 : 0,
                width: isEditable ? 300 : 0,
                paddingLeft: isEditable ? 10 : 0,
              },
            ]}
            placeholderTextColor="black"
          />
          <TextInput
            placeholder="PASSWORD"
            style={[
              styles.textInput,
              {
                height: isEditable ? 50 : 0,
                width: isEditable ? 300 : 0,
                paddingLeft: isEditable ? 10 : 0,
              },
            ]}
            placeholderTextColor="black"
          />
          <Animated.View style={[styles.button, {backgroundColor: 'white'}]}>
            <Text style={styles.text}>SIGN IN</Text>
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    flex: 2,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    position: 'absolute',
    height: 800,
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  button: {
    height: 50,
    width: 300,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    // elevation: 3,
  },
  textInput: {
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    marginVertical: 5,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  closeButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 1.5,
  },
  closeButtonContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    top: -20,
    position: 'absolute',
  },
});

export default App;
