<script>
import axios from "axios";

export default {
  data() {
    return {
      hasFetched: false,
      isError: false,
      photos: []
    };
  },
  mounted() {
    console.log("mount");
    axios(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${this.$route.params.sol}&api_key=${process.env.VUE_APP_KEY}`
    ).then(res => {
      this.hasFetched = true;
      this.photos = res.data.photos;
    });
  },
  watch: {
    $route(to, from) {
      console.log("watch $route");
      console.log(to, from);
      this.hasFetched = false;
      axios(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${this.$route.params.sol}&api_key=${process.env.VUE_APP_KEY}`
      ).then(res => {
        this.hasFetched = true;
        this.photos = res.data.photos;
      });
    }
  }
};
</script>

<template>
  <div class="MarsSol">
    <h1>Mars Sol {{ $route.params.sol }}</h1>
    <p v-if="!hasFetched">Loading images...</p>
    <div v-else-if="photos.length > 0">
      <p>There are {{ photos.length }} photo{{ photos.length === 1 ? '' : 's'}} on this sol.</p>
      <ul>
        <li v-bind:key="photo.id" v-for="photo in photos">
          <img :src="photo.img_src" alt="photo" />
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No photos on this sol</p>
    </div>
    <footer>
      <router-link :to="'/mars/' + (parseInt($route.params.sol) + 1)">Next sol</router-link>
    </footer>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
}

li {
  max-width: 100%;
}

footer {
  background: black;
  bottom: 0;
  left: 0;
  padding: 1rem;
  position: fixed;
  right: 0;
}

footer a {
  color: white;
}
</style>
