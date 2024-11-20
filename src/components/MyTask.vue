<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["allTasks"]),
    
    tasks() {
      return this.allTasks.map(task => ({
        ...task,
        daysLeft: this.calculateDaysLeft(task.deadline)
      }));
    },
  },
  
  methods: {
    calculateDaysLeft(deadline) {
      const today = new Date();
      const deadlineDate = new Date(deadline);
      const timeDiff = deadlineDate - today; 
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      if(daysDiff >= 14){
        return "низкий"
      }
      else if(daysDiff >= 7){
        return "средний"
      }
      else{
        return "высокий"
      }
    },
    deleteTask(index) {
      this.$store.dispatch("deleteTask", index);
    },
    toggleTask(index) {
      this.$store.dispatch("toggleTask", index);
    },
    goToAdd() {
      this.$router.push("/addtask");
    },
  },
};
</script>
<template>
  <div class="task">

    <h3 v-if="tasks.length === 0">Задач нету</h3>
    <ul>
        <RouterLink class="link_task" v-for="(task, index) in tasks" :key="index" :to='`/task/${index}`'>
          <h4>{{ task.title }}</h4>
          <p>{{ task.description }}</p>
          <span>Срок: {{ task.deadline }}</span>
          <span class="status">{{ task.status }}</span>
          <p class="priority">Приоритет: {{ task.daysLeft }}</p>
        <button @click="deleteTask(index)">Удалить</button>
      </RouterLink>   
    </ul>
    <button @click="goToAdd">Перейти к добавлению</button>
  </div>
</template>

<style>
.task{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}
h3 {
  text-align: center;
  margin-bottom: 40px;
}
ul{
  width: 100%;
}
.link_task {
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 20px;
  position: relative;
  color: #323232;
  text-decoration: none;
  border-radius: 4px;
  padding: 10px;
}

.link_task:hover{
  background-color: #0092c1;
}

.priority{
  position: absolute;
  top: 0;
  left: 0;
}

</style>
