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

<template>
  <div>{{greeting}} Earth!</div>
</template>
