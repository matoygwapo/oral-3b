<script setup>
import { ref } from 'vue'

const message = ref("My first VUe app")
const todos = ref([])
const task = ref("")

const addTask = (e)=>{
  e.preventDefault();
  const data = {
        task:task.value,
        status:false
  }
  todos.value.push(data)
  task.value=""
  console.log(todos.value)
}

</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <form class="form" @submit="addTask">
      <input type="text" v-model="task" placeholder="add task..." required>
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<style>
.form{
  border:1px solid;
  padding:10px;
  width: 200px;
  display: flex;
  justify-content: center;
}
table,tr,td,th{
  border:1px solid;
}
.done{
  background-color: rgb(160, 220, 160);
}
</style>
