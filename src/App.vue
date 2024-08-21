<script>
import HeaderPage from "./components/HeaderPage.vue";
import FooterPage from "./components/FooterPage.vue";
export default {
  name: "App",
  data() {
    return {
      isLoaded: true,
      x: 0, // Posizione iniziale X
      y: 0, // Posizione iniziale Y
      vx: 1, // Velocità iniziale X
      vy: 1, // Velocità iniziale Y
      ballSize: 200, // Dimensione della pallina
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    };
  },
  computed: {
    ballStyle() {
      return {
        width: `${this.ballSize}px`,
        height: `${this.ballSize}px`,
        transform: `translate(${this.x}px, ${this.y}px)`,
      };
    },
  },
  methods: {
    updateScreenSize() {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
    },
    animate() {
      // Aggiorna la posizione
      this.x += this.vx;
      this.y += this.vy;

      // Rimbalzo sui bordi dello schermo
      if (this.x <= 0 || this.x >= this.screenWidth - this.ballSize) {
        this.vx = -this.vx; // Inverte la velocità orizzontale
      }
      if (this.y <= 0 || this.y >= this.screenHeight - this.ballSize) {
        this.vy = -this.vy; // Inverte la velocità verticale
      }

      // Richiama il prossimo fotogramma
      requestAnimationFrame(this.animate);
    },
    initialize() {
      window.addEventListener("resize", this.updateScreenSize);
      this.animate();
    },
    createBuble(e) {
      let body = document.querySelector("body");
      let circle = document.createElement("span");
      circle.classList.add("buble");
      let x = e.pageX;
      let y = e.pageY;
      circle.style.left = x + "px";
      circle.style.top = y + "px";
      circle.style.width = "40px";
      circle.style.height = "40px";
      body.appendChild(circle);
    },
  },
  components: {
    HeaderPage,
    FooterPage,
  },
  mounted() {
    this.initialize();
    document.body.addEventListener("mousemove", this.createBuble);
    document.window.addEventListener("scroll", this.createBuble);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateScreenSize);
    document.body.removeEventListener("mousemove", this.createBuble);
  },
};
</script>
<template>
  <div :style="ballStyle" class="palla"></div>
  <div ref="customCursor" class="custom-cursor"></div>

  <div v-if="isLoaded">
    <HeaderPage />
    <router-view class="effetto"> </router-view>
    <FooterPage />
  </div>
  <div v-else class="relodedPage">reloded page</div>
</template>
<style lang='scss'>
@use "./style/general.scss" as *;
.relodedPage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
}

.palla {
  position: absolute;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle at 30% 30%, #7d60fd, #7c70ff, #0d0055);
  border-radius: 50%;
  box-shadow: inset -20px -20px 50px rgba(0, 0, 0, 0.3),
    20px 20px 50px rgba(0, 0, 0, 0.3);
}
</style>