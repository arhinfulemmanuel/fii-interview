<template>
  <div class="card">
    <div style="margin-bottom: 7px;font-weight: bolder">{{ this.title }}</div>
    <div> <small style="color: #eaeaea;">App ID: {{ this.appID }}...</small> </div>
    <div>
      <button class="open-btn" @click="redirectTo()">Open</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props:{
    title: {
      required: true,
      type: String
    },
    route: {
      required: true,
      type: String
    },
    appID: {
      required: true,
      type: String,
    }
  },
  methods: {
    redirectTo(){
      this.$router.push({ path: this.route })
    }
  }
}
</script>

<style scoped>
  .card{
    margin: 15px 0px;
    /*display: block;*/
    box-sizing: border-box;
    padding: 4%;
    color: white;
    background: #096DE1;
    border-radius: 10px;
    width: 48%;
    max-width: 48%;
    word-wrap: break-word; 
  }
  .open-btn{
    padding: 10px;
    outline: none;
    border: none;
    border-radius: 5px;
    color: #096DE1;
    font-weight: bolder;
    margin-top: 45px;
    cursor: pointer;
  }
</style>
