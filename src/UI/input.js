import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import {eyeOn, eyeOff} from './icon';

const Input = React.forwardRef((props, ref) => {
  let _textInput = React.createRef()
  let _root = React.createRef()
  const [show, setShow] = useState(props.type == 'password' ? true : false);
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          ref={ c => {
            _textInput = c;
            _root = c;
          }}
          {...props}
          clearTextOnFocus={false}
          blurOnSubmit={true}
          style={styles.input}
          value={props.value}
          onChangeText={v => {
            props.onChange && props.onChange(v);
          }}
          secureTextEntry={show}
          placeholder={props.placeholder}
        />
        <>
          {props.type == 'password' ? (
            <TouchableOpacity
              onPress={() => {
                setShow(!show);
              }}
              style={styles.icon}>
              {!show ? (
                <Svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    id="Icon"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 13.5C11.173 13.5 10.5 12.827 10.5 12C10.5 11.173 11.173 10.5 12 10.5C12.827 10.5 13.5 11.173 13.5 12C13.5 12.827 12.827 13.5 12 13.5ZM12 8.50002C10.0701 8.50002 8.50005 10.07 8.50005 12C8.50005 13.93 10.0701 15.5 12 15.5C13.93 15.5 15.5 13.93 15.5 12C15.5 10.07 13.93 8.50002 12 8.50002ZM12.2197 16.9976C7.91375 17.0976 5.10475 13.4146 4.17275 11.9956C5.19875 10.3906 7.78275 7.10462 11.7808 7.00262C16.0697 6.89362 18.8948 10.5856 19.8267 12.0046C18.8018 13.6096 16.2168 16.8956 12.2197 16.9976ZM21.8678 11.5026C21.2297 10.3906 17.7057 4.81662 11.7297 5.00362C6.20175 5.14362 2.98675 10.0136 2.13275 11.5026C1.95575 11.8106 1.95575 12.1896 2.13275 12.4976C2.76175 13.5946 6.16175 18.9996 12.0247 18.9996C12.1067 18.9996 12.1888 18.9986 12.2708 18.9966C17.7978 18.8556 21.0138 13.9866 21.8678 12.4976C22.0438 12.1896 22.0438 11.8106 21.8678 11.5026Z"
                    fill="#3C4459"
                  />
                </Svg>
              ) : (
                <Svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 13.5002C11.173 13.5002 10.5 12.8272 10.5 12.0002C10.5 11.9872 10.503 11.9744 10.506 11.9615L10.506 11.9615C10.5088 11.9498 10.5115 11.9382 10.512 11.9262L12.074 13.4882C12.0621 13.4887 12.0504 13.4915 12.0387 13.4942L12.0387 13.4942C12.0259 13.4972 12.0131 13.5002 12 13.5002ZM4.70698 3.29325C4.31598 2.90225 3.68398 2.90225 3.29298 3.29325C2.90198 3.68425 2.90198 4.31625 3.29298 4.70725L8.92299 10.3373C8.64699 10.8463 8.49998 11.4113 8.49998 12.0002C8.49998 13.9303 10.07 15.5002 12 15.5002C12.589 15.5002 13.154 15.3532 13.663 15.0772L19.293 20.7073C19.488 20.9023 19.744 21.0002 20 21.0002C20.256 21.0002 20.512 20.9023 20.707 20.7073C21.098 20.3162 21.098 19.6842 20.707 19.2932L4.70698 3.29325ZM12.2198 16.9979C7.91475 17.0979 5.10475 13.4149 4.17275 11.9959C4.62975 11.2819 5.39575 10.2359 6.45575 9.28487L5.04475 7.87287C3.52275 9.26187 2.54675 10.7799 2.13275 11.5029C1.95575 11.8109 1.95575 12.1899 2.13275 12.4979C2.76175 13.5949 6.16175 18.9999 12.0247 18.9999C12.1067 18.9999 12.1888 18.9989 12.2708 18.9969C13.4548 18.9669 14.5268 18.7109 15.4978 18.3269L13.9178 16.7469C13.3828 16.8889 12.8198 16.9829 12.2198 16.9979ZM11.7297 5.00363C17.7047 4.81663 21.2297 10.3906 21.8677 11.5026C22.0437 11.8106 22.0437 12.1896 21.8677 12.4976C21.4527 13.2206 20.4767 14.7386 18.9547 16.1276L17.5437 14.7156C18.6037 13.7646 19.3707 12.7186 19.8267 12.0046C18.8947 10.5856 16.0717 6.89463 11.7807 7.00263C11.1807 7.01763 10.6177 7.11163 10.0817 7.25363L8.50168 5.67363C9.47368 5.28963 10.5447 5.03363 11.7297 5.00363Z"
                    fill="#666D7C"
                  />
                </Svg>
              )}
            </TouchableOpacity>
          ) : null}
        </>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  inputContainer: {
    margin: 10,
    borderWidth: 1,
    height: 48,
    borderRadius: 8,
    borderColor: '#D2D2D2',
  },
  input: {
    borderRadius: 8,
    backgroundColor: '#ffffff',
    padding: 15,
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 15,
  },
  label: {
    marginLeft: 20,
  },
});
export default Input;
