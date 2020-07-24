<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <!--
    注意：
    變數是Boolean等的,要用v-bind
    -->
    <test msg = "123" 
    v-bind:isExist="true" 
    v-bind:todos="[{text:'Study Vue'},{text:'Study Vuex'}]"/>
  </div>
</template>

<script>
// @ is an alias to /src
import test from '@/components/test.vue'

export default {
  name: 'About',
  components: {
    test
  }
}
</script>