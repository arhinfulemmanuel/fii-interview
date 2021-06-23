<template>
  <div id="nav">
    <div id="left-nav-container">
      <router-link to="#">Documentation</router-link>
      <router-link to="#">Technical Reference</router-link>
      <router-link to="#">API Explorer</router-link>
      <router-link to="#">
        <font-awesome-icon prefix="fa" style="color: #a3a3a3" icon="search"/>
      </router-link>
    </div>
    <div id="right-nav-container">
      <router-link to="#">SHACK15</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexHeaderComponent"
}
</script>

<style scoped>
  #nav {
    padding: 15px 0px;
    border-bottom: 1px solid #cecece;
    display: flex;
    font-size:1vw;
  }

  #left-nav-container{
    padding-left: 10%;
    flex: 8;
  }

  #right-nav-container{
    flex: 1;
  }
  #nav a {
    font-weight: bold;
    color: #656565;
    text-decoration: none;
    padding: 0px 10px;
  }
</style>
