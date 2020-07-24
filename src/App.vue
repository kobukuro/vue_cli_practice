<!--下面這個template代表呈現的html(裡面只能有一個element)-->
<template>
  <div id="app">
    <div id="nav">
      <!--to指向的路徑要到router/index.js裡看-->
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <!--下面這個呈現相對應的Vue檔-->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
