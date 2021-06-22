<template>
  <!--Side NAV-->
  <div id="left-side-bar" class="sidebar">

    <div class="left-nav-cont">
      <user-nav-item-component title="Home" icon="home" background="#6A7192"></user-nav-item-component>
      <user-nav-item-component title="Reports" icon="chart-bar" background="#5a32aa"></user-nav-item-component>
      <user-nav-item-component title="Transactions" icon="exchange-alt" background="#5a32aa"></user-nav-item-component>
      <user-nav-item-component title="Items" icon="tag" flip="horizontal" background="#32CBBE"></user-nav-item-component>
      <user-nav-item-component title="Customers" icon="address-card" background="#9432aa"></user-nav-item-component>
      <user-nav-item-component title="Team" icon="users" background="#3E8BA0"></user-nav-item-component>
      <user-nav-item-component title="Account & Settings" icon="cog" background="#6A7192"></user-nav-item-component>
      <user-nav-item-component title="Orders" icon="shopping-bag" background="#32CBBE"></user-nav-item-component>
    </div>
  </div>
</template>

<script>
import UserNavItemComponent from "./UserNavItemComponent";
export default {
  name: "SideBarComponent",
  components: { UserNavItemComponent }
}
</script>

<style scoped>
  .sidebar {
    height: 100%;
    /*width: 25%;*/
    position: fixed;
    z-index: 1;
    left: 0;
    background-color: #ffffff;
    overflow-x: hidden;
    padding-top: 30px;
    transition: 0.5s;
    /*border-right: 1px solid #cecece;*/
    box-shadow: 1px -1px 8px -2px rgba(0,0,0,0.2);
  }

  .left-nav-cont{
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    border-bottom: 1px solid #e7e7e7;
  }
</style>