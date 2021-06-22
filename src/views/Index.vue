<template>
  <div>
    <index-header-component></index-header-component>
    <div id="container">
      <div class="head">
        <div style="margin: 5% 0% 2% 0%;">
          <span style="font-size: 2.5rem; font-weight: bold">Applications</span>
        </div>
        <div style="margin-bottom: 2%;line-height: 30px">
          Each application provides a unique set of API keys and configuration setting needed
          for making requests to Square APIs.
        </div>

        <div id="card-container">

          <card-component title="App" route="user" app-i-d="Sq0idp-vXgROmcOKdBkjXRXOu"></card-component>
          <card-component title="SHACK15 App" route="user" app-i-d="sq0idp-W-Xut6hMub4NnUNEwi"></card-component>

          <div class="empty-card">
            <router-link to="#">
              <font-awesome-icon style="color: #c4c4c4; font-size: 50px" icon="plus-circle"/>
            </router-link>

          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent";
import IndexHeaderComponent from "../components/IndexHeaderComponent";
export default {
  name: "Index",
  components: {IndexHeaderComponent, CardComponent}
}
</script>

<style scoped>
  #container{
    display: flex;
    justify-content: center;
    margin: 0px 22%;
  }

  #card-container{
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
  }
  .empty-card{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0px;
    padding: 7% 2%;
    background: #EEF0F5;
    border-radius: 10px;
    width: 44%;
    max-width: 44%;
  }
</style>