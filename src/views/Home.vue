<template>
  <div class="home">
    <LoginNavBar />
      <div class="home-nav-bar">
        <div class="home-brand-main">
          <div class="home-brand"> the london Lens company</div>
        </div>
        <div class="home-nav-links">
            <router-link class="nav-bar-link" to="/">Contact Lenses </router-link> 
            <router-link class="nav-bar-link" to="/solutions">Solutions & Lens Care</router-link>
            <router-link class="nav-bar-link" to="/eyeHealth">Eye Health </router-link>
            <router-link class="nav-bar-link" to="/about"> About Us </router-link>
            <router-link class="nav-bar-link" to="/quiz"> Take The Contact Lens Quiz </router-link>
          <div class="home-search">
            <p>Search</p>
            <span class="material-icons">
              search
            </span>
          </div>
        </div>
      </div>
      <Main />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginNavBar from '../components/LoginNavBar.vue'
import Main from '../components/Main.vue'


export default {
  name: 'Home',
  components: {
    LoginNavBar,
    Main,
  }
}
</script>

<style>
  .home-nav-links {
    display: flex;
    flex-direction: row;
  }
  .home-nav-bar {
    margin-top: 7px;
    height: 100px;
    background-color: black; 
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .home-brand {
    color: white;
  }
  .nav-bar-link {
    margin: 10px;
    text-decoration: none;
    color: white;
  }
  .home-search {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 200px;
    border: 2px solid white;
    height: 40px;
    border-radius: 30px;
    color: white;
    margin-left: 10px;
  }

</style>
