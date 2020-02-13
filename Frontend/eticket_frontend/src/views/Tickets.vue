<template>
  <div >
    <NavBar/>
    <b-container fluid>
      <b-row>
        <b-col class="ticketBox" cols="2">
          <h3>Tickets</h3>
          <br/>
          All tickets : <br/>
          Open tickets :<br/>
          Unassigned ticket :<br/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'tickets',
  components: {
    NavBar
  }
}
</script>
<style>
.mainBox{
  margin: 2%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.ticketBox{
  margin: 2%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: left
}
</style>
