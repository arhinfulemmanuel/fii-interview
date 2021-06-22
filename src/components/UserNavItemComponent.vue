<template>
  <div class="left-nav-item">
    <router-link class="ln-a" to="#">
      <font-awesome-icon :icon="icon" size="lg" :flip="flip" :style="{backgroundColor: background,}" class="icon"></font-awesome-icon>
      <div>{{ this.title }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "UserNavItemComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      required: true,
    },
    flip: {
      require: false,
    }
  }
}
</script>

<style scoped>
  .left-nav-item{
    box-sizing: border-box;
    width: 33%;
    display: flex;
    justify-content: center;
    margin-bottom: 10%;
  }
  .ln-a{
    text-decoration: none;
    text-align: center;
    width: 100%;
    color: white;
  }
  .ln-a div{
    margin-top: 5px;
    color: black;
  }
  .icon{
    padding: 20px 0px;
    width: 60%;
    height: 25px;
    border-radius: 10px;
  }
</style>