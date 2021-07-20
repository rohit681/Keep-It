import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Notes from './components/Notes';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import db from './config.js';

export default class KeepIt extends React.Component {
  constructor() {
    super();
    this.state = {
      noteArr: [],
      noteText: '',
    };
  }


  markDone = (item)=>{
    const node = db.ref('task').child(this.state.noteArr[item].id)
    node.remove();

    this.state.noteArr.splice(item,1)
    
  }

  componentDidMount(){
    const tasks = db.ref('task');
    tasks.on('value',(data)=>{
      const todos=data.val();

      const taskList=[];

      for(var id in todos){
        taskList.push({id,...todos[id]});
      }

      this.setState({noteArr:taskList})
    })
  }

  addTask = () => {
    const task = db.ref('task');

    var d = new Date();
    const monthName = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    
    if (this.state.noteText) {
      const newTask={
        note: this.state.noteText,
        date:
          d.getDate() + ' ' + monthName[d.getMonth()] + ' ' + d.getFullYear(),
      };

      task.push(newTask)

      this.setState({noteText:''});
    }
    
    
  };
  render() {
    var notes = this.state.noteArr.map((index,item)=>{
      return(
        <Notes task={index} markDone={()=>{this.markDone(item)}}/>
      );
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 20 }}>Keep It</Text>
        </View>
        <ScrollView style={{flex:1,marginBottom:70}}>{notes}</ScrollView>
        <View style={styles.footer}>
          <TextInput
            style={{
              outline: 'none',
              padding: 25,
              borderTopColor: 'gold',
              borderTopWidth: 3,
              fontSize: 15,
            }}
            placeholder="Enter Task"
            onChangeText={(text) => {
              this.setState({ noteText: text });
            }}
            value={this.state.noteText}
          />
          <TouchableOpacity style={styles.to} onPress={this.addTask}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    fontSize: 20,
    backgroundColor: 'gold',
    borderBottomColor: 'grey',
    borderBottomWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  footer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  to: {
    backgroundColor: 'gold',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    top: 20,
    borderRadius: 100,
  },
});
