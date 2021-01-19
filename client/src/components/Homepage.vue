<template>
  <div id="app">
    <div class="categories-wrapper d-flex justify-content-between">
      <b-card
        title="Tasks"
        img-src="https://images.unsplash.com/photo-1586282023358-13b511ccd21c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2 align-items-center text-center"
      >
        <div class="d-flex w-100 align-items-start">
          <b-button href="#" variant="info text-light">New Task</b-button>
        </div>
      </b-card>

      <b-card
        title="Events"
        img-src="https://images.unsplash.com/photo-1478147427282-58a87a120781?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2 align-items-center text-center"
      >
        <div class="d-flex w-100 align-items-start">
          <b-button href="#" variant="danger text-light">New Event</b-button>
        </div>
      </b-card>

      <b-card
        title="Finances"
        img-src="https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2 align-items-center text-center w-100"
      >
        <div class="d-flex w-100 align-items-start">
          <b-button href="#" variant="warning text-dark">New Finance</b-button>
        </div>
      </b-card>
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
</style>
