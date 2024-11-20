<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink, 
  },
};
</script>

<template>
  <nav>
    <RouterLink class="navigation" to="/">Мои задачи</RouterLink>
    <RouterLink class="navigation" to="/addtask">Добавить задачу</RouterLink>
    <RouterLink class="navigation" to="/settings">Настройки</RouterLink>
  </nav>
  <main>
    <div class="container">
      <h1>Список дел</h1>
      <RouterView />
    </div>
  </main>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Roboto", sans-serif;
  background-color: #e8e8e8;
  color: #323232;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  background-color: #add8e6;
  border-radius: 5px;
  border: 2px solid #000;
  box-shadow: 4px 4px #000;
  padding: 20px;
}
h1 {
  text-align: center;
}
nav {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  margin: 20px 0;
}
.navigation,
button{
  padding: 20px;
  border-radius: 5px;
  border: 2px solid #000;
  background-color: #f5f5dc;
  box-shadow: 4px 4px #000;
  font-size: 17px;
  font-weight: 600;
  color: #323232;
  text-decoration: none;
  cursor: pointer;
}
.navigation.router-link-active,
button:hover {
  box-shadow: 0px 0px #000;
  transform: translate(3px, 3px);
}

body[data-theme='light'] {
  background-color: #e8e8e8;
  color: #323232;
}

body[data-theme='dark'] {
  background-color: #323232;
  color: #e8e8e8;
}

body[data-theme='dark']  .container{
  background-color: #45aacc;
}

</style>
