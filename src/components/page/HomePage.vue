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
  position: relative;
  padding-left: 50%;
  opacity: 0;
  animation: showName 1s ease-in-out;
  animation-fill-mode: forwards;
}
@keyframes showName {
  0% {
    padding-left: 50%;
    opacity: 0;
  }
  100% {
    padding-left: 0;
    opacity: 1;
  }
}
p {
  font-size: 3rem;
  padding-top: 5rem;
  opacity: 0;
  animation: showDescription 1s ease-in-out 1s;
  animation-fill-mode: forwards;
}
@keyframes showDescription {
  0% {
    padding-top: 5rem;
    opacity: 0;
  }
  100% {
    padding-top: 0;
    opacity: 1;
  }
}

.jambo {
  height: 100vh;
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>