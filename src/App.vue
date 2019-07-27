<script>
import "./styles.css";

export default {
  name: "app"
};
</script>

<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">🚀 NASA Viewer</router-link>
        <router-link to="/earth">Earth</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
