<script>
export default {
  name: "HomePage",
  data() {
    return {};
  },
  methods: {},
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="jambo">
          <h1>Tommaso Galistu</h1>
          <p>Jr. Full Stack Web Developer</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
// @use 'path' as *;
h1 {
  font-size: 4rem;
}
p {
  font-size: 3rem;
}
.jambo {
  height: 100vh;
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>