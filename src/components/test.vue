<template>
    <div>
      <h1>{{msg}}</h1>
      <span v-if="isExist">
        Now you see me
      </span>
      <ol>
        <li v-for="(todo,x) in todos" :key="x">
          {{todo.text}}
        </li>
      </ol>
    </div>
</template>

<script>
export default {
  name: 'test',
  props: {
    msg: String,
    isExist:Boolean,
    todos:Array
  }
}
</script>