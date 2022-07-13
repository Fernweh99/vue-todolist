/*
#Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
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
    },
    invertIsDone(i) {
      this.tasks[i].isDone = !this.tasks[i].isDone;
    }

  }
})