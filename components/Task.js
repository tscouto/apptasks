import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tasks = ({ nome, descricao, status, data }) => {
  const textStyle = status === 'true' ? styles.completedTask : styles.taskName;

  return (
    <View style={styles.containterView}>
      <Text style={textStyle}>{nome}</Text>
      <Text style={textStyle}>{descricao}</Text>
      <Text style={textStyle}>{data}</Text>
      <Text style={textStyle}>
        {status === 'true' ? 'Concluída' : 'Pendente'}
      </Text>
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  containterView: {
    gap: 2,
    padding: 20,
    justifyContent: 'space-evenly',
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  taskName: {
    fontSize: 16,
  },
});
