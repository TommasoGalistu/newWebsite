<script>
import HeaderPage from "./components/HeaderPage.vue";
import FooterPage from "./components/FooterPage.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  components: {
    HeaderPage,
    FooterPage,
  },
};
</script>
<template>
  <HeaderPage />
  <main>
    <h3>main</h3>
  </main>
  <FooterPage />
</template>
<style lang='scss'>
@use "./style/general.scss" as *;
</style>