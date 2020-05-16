import React, {Component} from 'react';

import {View, TextInput, Switch} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSecureTextEntry: true,
      selection: {
        start: 0,
        end: 0,
      },
      preSelection: null,
      value: '',
    };
  }

  getSelection = (pre, selection) => {
    if (this.isUpdated) {
      this.isUpdated = false;
      return pre;
    } else {
      return selection;
    }
  };

  changed = false;
  isLock = -1;
  isUpdated = false;

  render() {
    let {value, selection, preSelection} = this.state;
    if (this.isLock !== -1 || value === '') {
      selection = {
        start: 0,
        end: 0,
      };
      if (value === '') {
        this.isUpdated = false;
      }
    }
    return (
      <View>
        <Switch
          onValueChange={value => {
            this.changed = true;
            this.setState({isSecureTextEntry: value});
          }}
          style={{marginLeft: 20, marginTop: 50}}
          value={this.state.isSecureTextEntry}
        />
        <TextInput
          style={{marginLeft: 20, marginTop: 50, backgroundColor: '#ccc'}}
          secureTextEntry={this.state.isSecureTextEntry}
          onChangeText={text => {
            this.setState({
              value: text,
            });
          }}
          onTouchStart={() => (this.changed = false)}
          value={value}
          selection={this.getSelection(preSelection, selection)}
          onSelectionChange={({nativeEvent: {selection}}) => {
            if (selection.start === 0 && this.changed) {
              this.isLock = 0;
              this.setState({
                value: value + ' ',
              });
              return;
            }
            this.setState({selection});
          }}
        />
      </View>
    );
  }

  componentDidUpdate() {
    if (this.isLock == 0) {
      setTimeout(() => {
        this.isLock = -1;
        this.isUpdated = true;
        this.changed = false;
        let {start, end} = this.state.selection;
        if (
          start > 0 &&
          end > 0 &&
          start < this.state.value.length &&
          end < this.state.value.length
        ) {
          start++;
          end++;
        }
        const selection = {start, end};
        this.setState({
          value: this.state.value.toString().trim(),
          preSelection: selection,
          selection,
        });
      }, 0);
    }
  }
}
