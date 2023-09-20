<template>
  <container>
    <header>
      <HeaderBar />
    </header>
    <RouterView />
  </container>
</template>
<script setup>
import HeaderBar from './components/HeaderBar.vue'
</script>

<style>

html,body{
  width: 100%;
  height: 100%;
  margin: 0;
}
#app{
  height: 100vh;
  width: 100%;
}
.el-header {
  background-color: #1961B1;
  color: #fff;
  line-height: 60px;
  --el-header-padding: 0 10px;
  width: 100%;
}

.el-main {
  --el-main-padding: 0;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
