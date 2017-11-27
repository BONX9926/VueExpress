<template>
  <div>
    <h1>Resgister</h1>
    <input type="email" name="email" v-model="email"><br>
    <input type="password" name="password" v-model="password"><br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthService from '@/service/AuthenticationService'

export default {
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  },
  methods: {
    async register () {
      const res = await AuthService.register({
        email: this.email,
        password: this.password
      })
      console.log(res.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
