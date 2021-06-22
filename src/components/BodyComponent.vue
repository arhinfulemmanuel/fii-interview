<template>
  <div id="body-cont">
    <div class="container" style="flex: 1; width: 100%">
      <div>
        <select id="drop-down">
          <option>default</option>
        </select>
      </div>
      <div style="margin: 20px 0px 35px 0px;">
        <span style="font-weight: bolder; font-size: 22px">Welcome back. Here's your business at glance</span>
      </div>
      <div style="font-weight: bolder; font-size: 16px;">
        <div style="margin-bottom: 10px">Today</div>

        <div id="card-cont">

          <div style="display: flex; width: 100%; justify-content: space-between">
            <div class="card">
              <div class="card-header">Gross sales</div>
              <div class="empty-text">
                No sales yet today
                <font-awesome-icon style="font-size: 12px" icon="chevron-right"></font-awesome-icon>
              </div>
            </div>

            <div class="card">
              <div class="card-header">Transactions</div>
              <div class="empty-text">
                No sales yet today
                <font-awesome-icon style="font-size: 12px" icon="chevron-right"></font-awesome-icon>
              </div>
            </div>

          </div>

          <div style="flex: 1; flex-direction: column; margin-top: 20px;">

            <div class="long-card">
              <div class="card-header" style="font-weight: bolder">
                Payment type
                <font-awesome-icon style="font-size: 12px" icon="chevron-right"></font-awesome-icon>
              </div>
              <div class="empty-text">No sales yet today</div>
            </div>

          </div>

          <div style="flex: 1; flex-direction: column; margin-top: 20px;">

            <div class="long-card">
              <div class="card-header" style="font-weight: bolder">
                Top items by sales
                <font-awesome-icon style="font-size: 12px" icon="chevron-right"></font-awesome-icon>
              </div>
              <div class="empty-text">No sales yet today</div>
            </div>

          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BodyComponent"
}
</script>

<style scoped>
  #body-cont{
    margin: 0% 1% 0% 25%;
    padding: 2%;
    display: flex;
  }
  #container{
  }
  #drop-down{
    padding: 10px;
    border: none;
    border-radius: 3px;
    outline: none;
    background: #E0E1E3;
  }
  #card-cont{
    display: flex;
    width: 60%;
    justify-content: space-between;
    flex-direction: column;
  }
  .card{
    padding: 4% 2%;
    width: 45%;
    border-radius: 3px;
    box-shadow: 0 0px 8px -2px rgba(0,0,0,0.2);
  }

  .long-card{
    padding: 5% 2%;
    width: 96%;
    border-radius: 3px;
    box-shadow: 0 0px 8px -2px rgba(0,0,0,0.2);
  }

  .card-header{
    font-size: 14px;
    margin: 0px 0px 10px 0px;
  }
  .empty-text{
    font-size: 20px;
    color: #7A7474;
  }

</style>