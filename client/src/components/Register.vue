<template>
  <div>
    <h1>Inregistrare</h1>
    <input type="email" name="Email" placeholder="Email" v-model="Email" />
    <br>
    <input type="password" name="Password" placeholder="Parola" v-model="Password" />
    <br>
    <button @click="register">Inregistrare</button>
  </div>
</template>



<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      Email: "abc",
      Password: "123"
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        Email: this.Email,
        Password: this.Password
      });
      console.log(response.data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
