import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Notes extends React.Component {
  render() {
    return (
      <View style={styles.note} key={this.props.task}>
        <Text style={styles.notetext}>{this.props.task.note}</Text>
        <Text style={styles.notetext}>{this.props.task.date}</Text>
        <TouchableOpacity style={styles.done} onPress={this.props.markDone}>
          <Text>Done</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  note: {
    borderBottomColor: '#ededed',
    borderBottomWidth: 2,
    padding: 20,
    paddingRight: 210,
    position: 'relative',
  },
  notetext: {
    borderLeftWidth: 10,
    borderLeftColor: '#ededed',
    paddingLeft: 20,
  },
  done: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    top: 10,
    backgroundColor: 'grey',
    color: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
