import { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button, Modal } from 'react-native';
import { getData, storeData } from '../services/storage';
import { TouchableOpacity } from 'react-native';
import Tasks from '../components/Task';

export default function TaskScreen() {
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [original, setOriginal] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [descricaoValue, setDescricaoValue] = useState('');
  const [search, setSearch] = useState('');

  const novaTarefa = async () => {
    if (inputValue.trim() && descricaoValue.trim()) {
      // Verifica se ambos os campos estão preenchidos
      const newTask = {
        id: tasks.length + 1,
        nome: inputValue,
        descricao: descricaoValue, // Usa o valor da descrição
        status: 'false',
        data: new Date().toLocaleDateString(), // Data atual
      };

      const updatedTasks = [...tasks, newTask]; // Cria a lista de tarefas atualizada

      setTasks(updatedTasks); // Atualiza o estado das tarefas
      setInputValue(''); // Limpa o campo de entrada
      setDescricaoValue(''); // Limpa o campo de descrição
      setModalVisible(false); // Fecha o modal
      await storeData('tasks', updatedTasks); // Armazena a lista atualizada
    }
  };

  const toggleTaskStatus = async id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, status: task.status === 'false' ? 'true' : 'false' };
      }
      return task;
    });
    setTasks(updatedTasks);
    await storeData('tasks', updatedTasks);

    setTasks(updatedTasks);
    await storeData('tasks', updatedTasks);
  };

  useEffect(() => {
    async function getStorageData() {
      const _tasks = await getData('tasks');
      if (_tasks) {
        setTasks(_tasks); // Define o estado das tarefas
        setOriginal(_tasks); // Também define o estado original
      }
    }

    getStorageData();
  }, []);

  useEffect(() => {
    console.log(
      'usuario digitando no input de busca ou array Original foi alterado'
    );
    const filtrado = original.filter(item =>
      item.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    setTasks(filtrado);
  }, [search, original]);

  const getFormattedDate = () => {
    const daysOfWeek = [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado',
    ];

    const monthAbbreviations = {
      janeiro: 'Jan',
      fevereiro: 'Fev',
      março: 'Mar',
      abril: 'Abr',
      maio: 'Mai',
      junho: 'Jun',
      julho: 'Jul',
      agosto: 'Ago',
      setembro: 'Set',
      outubro: 'Out',
      novembro: 'Nov',
      dezembro: 'Dez',
    };

    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()]; // Obtém o dia da semana
    const dateParts = now
      .toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
      })
      .split(' '); // Divide a data formatada

    const day = dateParts[0]; // Obtém o dia
    const month = dateParts[2]; // Obtém o mês por extenso

    const abbreviatedMonth = monthAbbreviations[month]; // Abrevia o mês

    return `${dayOfWeek}, ${day} de ${abbreviatedMonth}`; // Retorna a string formatada
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerView}>
        <View>
          <Text style={styles.textToday}>Today Tarefa</Text>
          <Text>{getFormattedDate()}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyleButton}>+ Criar tarefa</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Buscar tarefa"
        onChangeText={setSearch}
        value={search}
      />

      {tasks.length === 0 ? (
        <Text>Nao existem tarefas cadastradas</Text>
      ) : (
        <></>
      )}

      {/* <View style={styles.list}>
        {tasks.map(task => {
          return (
            <Tasks
              key={task.id}
              nome={task.nome}
              descricao={task.descricao}
              status={task.status}
              data={task.data}
            />
          );
        })}
      </View> */}

      <View style={styles.list}>
        {tasks.map(task => (
          <View key={task.id} style={styles.taskContainer}>
            <Tasks
              nome={task.nome}
              descricao={task.descricao}
              status={task.status}
              data={task.data}
            />
            <TouchableOpacity
              onPress={() => toggleTaskStatus(task.id)}
              style={[
                styles.completeButton,
                task.status === 'true' && styles.completedButton,
              ]}
            >
              <Text style={styles.buttonText}>
                {task.status === 'true' ? 'Concluída' : 'Concluir'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(true)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Nova Tarefa</Text>
            <TextInput
              style={styles.styleModalInput}
              placeholder="Digite o nome da tarefa"
              value={inputValue}
              onChangeText={setInputValue}
            />
            <TextInput
              style={styles.styleModalInput}
              placeholder="Digite a descrição da tarefa" // Novo campo para descrição
              value={descricaoValue}
              onChangeText={setDescricaoValue}
            />
            <TouchableOpacity
              style={styles.ButtonStyles}
              title="Salvar"
              onPress={novaTarefa}
            >
              <Text>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ButtonStyles}
              title="Cancelar"
              onPress={() => setModalVisible(false)}
            >
              <Text>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1fff5',
    alignItems: 'center',
  },
  containerView: {
    marginTop: 30,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 30,
  },

  viewTodayInput: {
    // flexDirection: 'column',
  },

  list: {
    backgroundColor: '#fff',
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#97d1f1',
    padding: 10,
    borderRadius: 4,
    width: '35%',
    alignItems: 'center',
  },
  input: {
    height: 30,
    width: '70%',
    margin: 22,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },

  styleModalInput: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },

  ButtonStyles: {
    marginTop: 10,
    backgroundColor: '#d1e9ff',
    width: 100,
    borderRadius: 4,
    padding: 10,
    alignItems: 'center',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  completedTask: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  taskName: {
    fontSize: 16,
  },
  completeButton: {
    marginLeft: 10,
    backgroundColor: '#4CAF50',
    padding: 5,
    borderRadius: 3,
    alignItems: 'center',
  },

  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    gap: 50,
  },
  completeButton: {
    backgroundColor: '#4CAF50',
    padding: 5,
    borderRadius: 3,
    alignItems: 'center',
  },
  completedButton: {
    backgroundColor: '#888',
  },
  buttonText: {
    color: '#fff',
  },
  textToday: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textStyleButton: {
    color: '#5884f2',
  },
});
