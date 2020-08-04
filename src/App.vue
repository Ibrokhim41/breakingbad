<template>
  <div id="app">
    <div class="container p-0">
      <!-- header -->
      <div class="header">
        <router-link :to="'/'"><a><img src="@/assets/pngegg.png" alt="breaking bad" /></a></router-link>
        <div class="nav">
          <ul v-for="link in links" :key="link">
            <li>
              <router-link :to="link.link"><a>{{ link.name }}</a></router-link>
            </li>
          </ul>
        </div>
      </div>

      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: this.$store.state.links
    };
  },
};
</script>

<style>
body {
  background-image: url("https://www.desktopbackground.org/download/1600x900/2015/09/25/1016590_breaking-bad-jesse-pinkman-wallpaper-by-blockstabfatality-on_3840x1080_h.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: 100vh;
}
#app {
  width: 900px; 
  min-height: 100vh;
  margin: auto;
  background: rgba(255, 212, 22, 0.5); 
  border-left: 2px solid #528644;
  border-right: 2px solid #528644;
}
.container {
  width: 900px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 50px;
}
.header img {
  width: 140px;
}
.nav {
  font-size: 18px;
}
.nav ul {
  list-style-type: none;
}
.nav a {
  color: white;
}
</style>
