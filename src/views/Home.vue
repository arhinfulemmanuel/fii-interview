<template>
  <div>
    <UserHeaderComponent></UserHeaderComponent>
    <body-component></body-component>
  </div>
</template>

<script>

import UserHeaderComponent from "../components/UserHeaderComponent";
import BodyComponent from "../components/BodyComponent";
export default {
  name: 'Home',
  components: {BodyComponent, UserHeaderComponent},
}
</script>

<style scoped>

</style>