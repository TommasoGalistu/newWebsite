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
  <div class="sfondo">
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

    <div class="container d-flex align-items-center justify-content-center">
      <div class="row">
        <div class="col">
          <div class="tcard">
            <img src="" alt="immagine" />
            <div>
              <p>JR. FULL STACK DEVELOPER</p>
              <h2>Tommaso Galistu</h2>
              <p>Sono un Full Stack Developer e abito a Roma</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="cardNoFlex">
            <img src="" alt="immagine" />
            <div>
              <p>More about me</p>
              <h2>About me</h2>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="cardNoFlex">
            <img src="" alt="immagine" />
            <div>
              <p>All my project</p>
              <h2>Project</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
// @use "../../style/general.scss" as *;

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
  p {
    font-size: 3rem;
    padding-top: 5rem;
    opacity: 0;
    animation: showDescription 1s ease-in-out 1s;
    animation-fill-mode: forwards;
  }
}
.tcard {
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: rgba(107, 106, 194, 0.5);
  border-radius: 10px;
  padding: 1rem;
  p {
    color: rgb(175, 166, 197);
  }
}
.cardNoFlex {
  background-color: rgba(107, 106, 194, 0.5);
  border-radius: 10px;
  padding: 1rem;
  p {
    color: rgb(175, 166, 197);
  }
}
</style>