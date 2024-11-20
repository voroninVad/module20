<script>
export default {
  data() {
    return {
      newTask: "",
    };
  },
  
  methods: {
    addTask() {
      if (this.newTaskTitle.trim() && this.newTaskDescription.trim() && this.newTaskDeadline) {
        const newTask = {
          title: this.newTaskTitle,
          description: this.newTaskDescription,
          deadline: this.newTaskDeadline,
          status: 'новая'
        };
        this.$store.dispatch("addTask", newTask);        
        this.newTaskTitle = "";
        this.newTaskDescription = "";
        this.newTaskDeadline = "";        
        this.$router.push("/");
      }
    },
  },
};
</script>

<template>
  <input
    v-model="newTaskTitle"
    placeholder="Введите заголовок задачи"
  />
  <textarea
    v-model="newTaskDescription"
    placeholder="Введите описание задачи"
  ></textarea>
  <label for="deadline">
    Срок выполнения
    <input
      type="date"
      v-model="newTaskDeadline"
      id="deadline"
    />
  </label>
  <button @click="addTask">Добавить</button>
</template>

<style>
input,textarea {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 2px solid #000;
  background-color: #f5f5dc;
  box-shadow: 4px 4px #000;
  font-weight: 600;
  padding: 5px 10px;
  outline: none;
  margin: 40px 0;
}
textarea {
  height: 100px;
}
</style>
