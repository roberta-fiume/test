<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Contact Lenses </router-link> 
      <router-link to="/solutions">Solutions & Lens Care</router-link>
      <router-link to="/eyeHealth">Eye Health </router-link>
      <router-link to="/about"> About Us </router-link>
      <router-link to="/quiz"> Take The Contact Lens Quiz </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
