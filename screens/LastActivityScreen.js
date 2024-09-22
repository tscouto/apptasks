import { View, Text, StyleSheet } from 'react-native';

export default function LastActivityScreen() {
  return (
    <View style={styles.containter}>
      <Text style={styles.textStyles}>Nao existem atividades recentes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: '#f1fff5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyles: {
    fontSize: 20,
  },
});
