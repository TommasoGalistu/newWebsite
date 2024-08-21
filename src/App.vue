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
      circle.style.width = "20px";
      circle.style.height = "20px";
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
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateScreenSize);
    document.body.removeEventListener("mousemove", this.createBuble);
  },
};
</script>
<template>
  <div v-if="isLoaded">
    <div :style="ballStyle" class="palla"></div>
    <div style="top: 15%; left: 10%" class="glow"></div>
    <div style="top: 50%; left: 25%" class="glow"></div>
    <div style="top: 15%; left: 75%" class="glow"></div>
    <div style="top: 70%; left: 75%" class="glow"></div>
    <HeaderPage />
    <router-view> </router-view>
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
  z-index: 0;
}
.glow {
  width: 20px; /* Adjust size as needed */
  height: 20px; /* Adjust size as needed */
  background: radial-gradient(
    circle,
    rgba(255, 255, 0, 1) 0%,
    rgba(255, 165, 0, 0.5) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: 50%;
  position: fixed; /* Position it wherever you need */
  animation: pulsate 2s infinite ease-in-out;
  z-index: 0;
}

@keyframes pulsate {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
}
</style>