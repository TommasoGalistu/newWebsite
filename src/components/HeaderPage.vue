<script>
import { router } from "../router.js";
export default {
  name: "HeaderPage",
  data() {
    return {
      router: router.options.routes,
    };
  },
  methods: {},
};
</script>
<template>
  <header>
    <div class="container">
      <div class="row align-items-center">
        <div class="col">
          <div class="contLogo">
            <h2 class="tLetter">T</h2>
            <h2>G</h2>
          </div>
        </div>
        <div class="col align-items-center">
          <ul class="d-flex align-items-center justify-content-between">
            <li v-for="(item, index) in router" :key="index">
              <router-link class="link" :to="{ name: item.name }">{{
                item.name
              }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang='scss' scoped>
// @use 'path' as *;
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
}
.contLogo {
  position: relative;
  h2 {
    position: absolute;
    top: 0;
    left: 0;
  }
  .tLetter {
    left: 10px;
    top: -13px;
  }
}
</style>