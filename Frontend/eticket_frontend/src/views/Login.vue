<template>
  <div class="loginForm">
    <b-card class="mt-3" header="Login">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="remember">Remember me</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

        <b-button type="reset" variant="danger">Reset</b-button>
      <b-button type="submit" variant="primary">Login</b-button>

    </b-form>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
          checked: []
        },
        show: true,
        config :{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        const params = new URLSearchParams();
        params.append('email', this.form.email);
        params.append('password', this.form.password);
        axios.post(`http://localhost:3000/users/admin/login`, params,this.config)
        .then(response => {
            let is_admin = response.data.user.is_admin
            localStorage.setItem('user',JSON.stringify(response.data.user))
            localStorage.setItem('jwt',response.data.token)

            if (localStorage.getItem('jwt') != null){
                this.$emit('loggedIn')
                if(this.$route.params.nextUrl != null){
                    this.$router.push(this.$route.params.nextUrl)
                }
                else {
                    if(is_admin== 1){
                        this.$router.push('admin')
                    }
                    else {
                        this.$router.push('dashboard')
                    }
                }
            }
            
        })
        .catch(e => {
          this.errors.push(e)
    })
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
        this.form.checked = []
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
<style>
.loginForm{
    margin-left: 35%;
    margin-right: 35%;
}
</style>