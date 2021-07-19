import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const Task = (props) => {

    return (
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.square}></View>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
      </View>
    )
  }
  
const styles = StyleSheet.create({

    item: {
        backgroundColor: '#363636',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
    
 
      itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
      },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#7E7E7E',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },

    itemText:{
      color: '#D5D5D5',
        maxWidth: '80%',
    },

    text:{},

    circular: {
        width: 12,
        height: 12,
        borderColor: '#BDBDBD',
        borderWidth: 2,
        borderRadius: 5,
      },
})


export default Task;