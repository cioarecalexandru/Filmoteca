<template>
  <v-layout row mt-5>
    <v-flex xs6 offset-xs3>
      <panou title="Logare">
        <v-text-field label="Email" v-model="email"></v-text-field>
         <br>
         <v-text-field type="password" label="Parola" v-model="password"></v-text-field>
         <div class="error" v-html="Error">
         </div>
         <v-btn dark class="cyan" @click="login">Logare</v-btn>
      </panou>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import Panou from '@/components/Panou'
export default {
  data() {
    return {
      email: "abc",
      password: "123",
      Error: null
    };
  },
  components:{
    Panou
  },
  watch:{
    email: function(){
      this.Error = "";
    },
    password: function(){
      this.Error = "";
    }
  },
  methods: {
    async login() {
      const response = await AuthenticationService.login({
        email: this.email,
        password: this.password
      });
      console.log('raspunsul la login este ', response);
      this.$store.dispatch('setToken', response.data.token);
      this.$store.dispatch('setUser', response.data.user);
      if(this.$store.state.isUserLoggedIn){
        this.$router.push({
          name:'filme'
        })
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}

.btn{
  padding: 0px;
}

</style>
