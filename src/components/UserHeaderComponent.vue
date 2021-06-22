<template>
  <div style="font-size: 14px">
    <div id="nav">
      <div id="left-nav-container">
        <button @click="toggleSideBar" style="outline: none; border: none; background: transparent; cursor: pointer">
          <font-awesome-icon icon="bars" size="lg"></font-awesome-icon>
        </button>
        <router-link to="#">Home</router-link>
      </div>
      <div id="mid-nav-container">
        <router-link to="#">
          <img style="width: 17px " src="../assets/icons/square.png" />
        </router-link>
      </div>
      <div id="right-nav-container">
        <router-link to="#"><font-awesome-icon size="lg" icon="search"></font-awesome-icon></router-link>
        <router-link to="#">
          <font-awesome-icon size="lg" :icon="['far', 'bell']"></font-awesome-icon>
          <font-awesome-icon id="dot" icon="circle"></font-awesome-icon>
        </router-link>
        <router-link to="#"> <font-awesome-icon size="lg" :icon="['far','question-circle']"></font-awesome-icon> </router-link>
        <router-link to="#" style="font-weight: normal"> Default test Accou... </router-link>
      </div>
    </div>
    <side-bar-component :style="side_nav_style"></side-bar-component>
  </div>
</template>

<script>
import SideBarComponent from "./SideBarComponent";
export default {
  name: "UserHeaderComponent",
  components: {SideBarComponent},
  data(){
    return{
      open_side_bar: true,
      side_nav_style: {
        width: '0%',
      }
    }
  },
  methods: {
    toggleSideBar(){
      if(this.side_nav_style.width === '25%'){
        this.side_nav_style.width = '0%'
      }
      else if (this.side_nav_style.width === '0%'){
        this.side_nav_style.width = '25%'
      }
    },
    _resize(){
      if (window.innerWidth > 960) {
        this.side_nav_style.width = '25%'
      }
      else {
        this.side_nav_style.width = '0%'
      }
    }
  },
  created() {

    // check size on created
    if (window.innerWidth > 960) {
      this.side_nav_style.width = '25%'
    }

    // update size on resize
    window.addEventListener('resize', this._resize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this._resize)
  },
}
</script>

<style scoped>
  #nav {
    padding: 15px 0;
    border-bottom: 1px solid #cecece;
    display: flex;
  }
  #left-nav-container{
    flex: 1;
  }
  #mid-nav-container{
    flex: 1;
    text-align: center;
  }
  #right-nav-container{
    flex: 1;
    text-align: right;
  }
  #nav a {
    font-weight: bold;
    color: #656565;
    text-decoration: none;
    padding: 0 10px;
  }
  #dot{
    position: relative;
    top: -7px;
    left: -5px;
    font-size: 9px;
    color: #3E8BA0;
  }
</style>