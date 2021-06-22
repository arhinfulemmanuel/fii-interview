<template>
  <div class="left-nav-item">
    <router-link class="ln-a" to="#">
      <div class="img-cont">
        <img class="img" src="../assets/icons/right-left.png" />
      </div>
      <div>{{ this.title }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CustomUserNavItemComponent",
  props: {
    title: {
      type: String,
      required: true,
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
  margin-top: 0px;
  color: black;
}
.img-cont{
  /*border: solid;*/
  padding: 10% 0px;
  box-sizing: border-box;
  background: #686868;
  max-width: 60%;
  border-radius: 10px;
  margin: auto;
}
.img{
  padding: 20px 0px;
  width: 60%;
  height: 25px;
  background: #686868;
  border-radius: 10px;
}
</style>