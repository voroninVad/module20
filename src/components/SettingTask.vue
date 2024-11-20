<template>
    <div class="settings">
      <h1>Настройки</h1>
      <label for="theme-selector">Выберите тему:</label>
      <select id="theme-selector" v-model="selectedTheme" @change="changeTheme">
        <option value="light">Светлая тема</option>
        <option value="dark">Темная тема</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedTheme: localStorage.getItem('theme') || 'light',
      };
    },
    methods: {
      changeTheme() {
        document.body.setAttribute('data-theme', this.selectedTheme);
        localStorage.setItem('theme', this.selectedTheme);
      },
    },
    created() {
      this.changeTheme(); 
    },
  };
  </script>
  
  <style scoped>
  .settings {
    text-align: center;
    margin-top: 20px;
  }
  
  label {
    font-size: 18px;
  }
  
  select {
    padding: 10px;
    font-size: 16px;
    margin-top: 10px;
  }
  </style>