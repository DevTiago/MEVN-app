<template>
  <div id="app">
    <div class="row">
      <div class="categories-wrapper d-flex justify-content-between col-12">
        <h3>Overview</h3>
      </div>
    </div>
    <Crypto />
  </div>
</template>

<script>
import Crypto from "./Crypto.vue";

export default {
  name: "Homepage",
  components: { Crypto },
  data() {
    return {
      bitcoins: [],
      onProgress: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.card-body {
  width: 100%;
}

h3 {
  width: 100%;
  border-bottom: 2px solid grey;
}
</style>
