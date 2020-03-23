<template>
  <div class="loginForm">
    <b-card class="mt-3" header="Register">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
        id="input-group-5"
        label="Name:"
        label-for="input-5"
      >
        <b-form-input
          id="input-5"
          v-model="form.name"
          type="text"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

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

      <b-form-group id="input-group-4" label="Confirm Password:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.confirmPassword"
          type="password"
          required
          placeholder="Enter confirm password"
        ></b-form-input>
      </b-form-group>

        <b-button type="reset" variant="danger">Reset</b-button>
      <b-button type="submit" variant="primary">Login</b-button>

    </b-form>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
            name:'',
          email: '',
          password: '',
          confirmPassword: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.email = ''
        this.form.password = ''
        this.form.confirmPassword = ''
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