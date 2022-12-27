const { createApp } = Vue;

createApp({
  data() {
    return {
        refTask: 0,
        newTask: "",
        taskList: [
          { text: "Ripulire la stanza", done: false },
          { text: "Fare la doccia", done: false },
          { text: "Fare colazione", done: false },
          { text: "Preparare la postazione", done: false },
          { text: "Inizare a lavorare", done: false },
        ],
      };
    },
    methods: {
        addTask() {
            let newObject = {
              text: this.newTask,
              done: false,
            };
      
            this.taskList.push(newObject);
            this.newTask = "";
          },
          delTask(index) {
            this.taskList.splice(index, 1);
        },
    },
}).mount("#appToDoList");