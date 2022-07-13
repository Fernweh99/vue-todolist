/*
#MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
#MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa,
il todo viene rimosso dalla lista.
#MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi":
cliccando sul pulsante, il testo digitato viene letto e utilizzato
per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
*/

const App = new Vue({
  name: 'ToDoList',
  el: '#todo-list',
  data: {
    valueTask: "",
    tasks: [
      {
        description: 'Fare la spesa',
        isDone: true,
      },
      {
        description: 'Fare l\'esercizio',
        isDone: false,
      },
      {
        description: 'Andare in banca',
        isDone: true,
      },
    ],
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    addNewTask() {
      if (this.valueTask.trim()) {
        this.tasks.push({description: this.valueTask.trim(), isDone: false})
        this.valueTask = "";
      }
    }
  }
})