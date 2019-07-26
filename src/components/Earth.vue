<template>
  <div>{{greeting}} Earth!</div>
</template>

<script>
export default {
  data() {
    return {
      greeting: "None"
    };
  },
  mounted() {
    this.greeting = "Hello";
  }
};
</script>
