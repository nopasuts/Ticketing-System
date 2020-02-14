<template>
  <div >
    <NavBar/>
    <b-container fluid>
      <b-row>
        <b-col class="ticketBox" cols="3">
          <h3>Ticket Categories</h3>
          <br/>
          All tickets : <br/>
          Open tickets :<br/>
          Unassigned ticket :<br/>
        </b-col>
        <b-col class="ticketBox" cols="8">
          <b-table striped hover :items="items" :fields="fields"></b-table>
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
  },
  data(){
    return{
      fields: [
          {
            key: 'Ticket',
            sortable: true
          },
          {
            key: 'Status',
            sortable: false
          },
          {
            key: 'Priority',
            label: 'Priority',
            sortable: true,
            // Variant applies to the whole column, including the header and footer
            variant: 'danger'
          },
          {
            key: 'Date',
            sortable: false
          },
          {
            key: 'Due',
            sortable: false
          },
          {
            key: 'Reply',
            sortable: true
          }
        ],
      items: [
          { Ticket:"Cannot do this" , Status:"Open" , Priority:"Normal" ,Date:"01-01-2020",Due:"02-01-2020",Reply:2 },
          { Ticket:"Cannot do that" , Status:"Open" , Priority:"Normal" ,Date:"01-01-2020",Due:"02-01-2020",Reply:1 }
        ]
    }
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
