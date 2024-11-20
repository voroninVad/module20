<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      task: {
        title: "",
        description: "",
        deadline: "",
      }
    };
  },

  computed: {
    ...mapGetters(["allTasks"]),
  },

  created() {
    const taskId = this.$route.params.id;
    const task = this.allTasks[taskId];
    if (task) {
      this.task = { ...task }; 
    } else {
      this.$router.push("/"); 
    }
  },

  methods: {
    updateTask() {
      const taskId = this.$route.params.id;
      this.$store.dispatch("updateTask", { id: taskId, task: this.task });
      this.$router.push("/"); 
    }
  }
};
</script>

<template>
  <div class="task">
    <h2>Редактировать Задачу</h2>
    <input v-model="task.title" placeholder="Название задачи" />
    <textarea v-model="task.description" placeholder="Описание задачи"></textarea>
    <label for="deadline">Срок выполнения
      <input type="date" v-model="task.deadline" id="deadline" />
    </label>
    <button @click="updateTask">Обновить задачу</button>
  </div>
</template>

<style>

</style>
