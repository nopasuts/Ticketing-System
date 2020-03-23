<template>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#/">
            <img src="https://pngimage.net/wp-content/uploads/2018/06/mail-icons-png-3.png" class="d-inline-block align-top logo" alt="Kitten">
        </b-navbar-brand>
        
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav >
          <b-nav-item href="#/tickets" class="navItem">Tickets</b-nav-item>
          <b-nav-item href="#" class="navItem" disabled>|</b-nav-item>
          <b-nav-item href="#" class="navItem">Community</b-nav-item>
          <b-nav-item href="#" class="navItem" disabled>|</b-nav-item>
          <b-nav-item href="#/faq" class="navItem">Knowledge base</b-nav-item>
          <b-nav-item href="#" class="navItem" disabled>|</b-nav-item>
          <b-nav-item href="#" >
            <b-button variant="outline-primary" class="my-2 my-sm-0" >New Tickets
              <b-img src="https://i.ya-webdesign.com/images/ios-mail-icon-png-3.png" class="btnImg"></b-img>
            </b-button>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form right>
            <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
          <b-nav-item href="#" class="navItem" disabled>|</b-nav-item>
          <b-nav-item href="#/login" >
            <b-button class="my-2 my-sm-0">Login
              <b-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhPqLQW19Yl8Fi3Dpc-qtrlrum5SDnhoHCQQQ_pQuwR-DCcs57" class="btnImg"></b-img>
            </b-button>
          </b-nav-item>
        </b-navbar-nav>
        </b-collapse>
      </b-navbar>
        
    </div>
</template>
<script>
export default {
  name: 'NavBar',
  props: {}
}
</script>
<style >
.logo{
  height: 50px;
}
.navItem{
  padding-top: 2%;
  margin-top: 0%
}
.newTicketBtn{
  padding-top: 0%;
  margin-top: 0%
}
.btnImg{
  height: 30px;
}
</style>