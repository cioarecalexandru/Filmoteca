<template>
  <v-layout row mt-5>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Inregistrare</v-toolbar-title>
        </v-toolbar>
      
        <div class="pl-4 pr-4 pt-2 pb-2">
         <v-text-field label="Email" v-model="Email"></v-text-field>
         <br>
         <v-text-field label="Parola" v-model="Password"></v-text-field>
         <div class="error" v-html="Error">
         </div>
         <v-btn dark class="cyan" @click="register">Inregistrare</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      Email: "abc",
      Password: "123",
      Error: null
    };
  },
  watch:{
    Email: function(){
      this.Error = "";
    },
    Password: function(){
      this.Error = "";
    }
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        Email: this.Email,
        Password: this.Password
      });
      if (response.data === "error") {
        this.Error = "A fost o problema la inregistrare";
      } else {
        this.Error = "";
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
