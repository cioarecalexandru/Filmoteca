<template>
  <v-layout row mt-5>
    <v-flex xs6 offset-xs3>
      <panou title="Inregistrare">
        
         <v-text-field label="Email" v-model="email"></v-text-field>
         <br>
         <v-text-field type="password" label="Parola" v-model="password"></v-text-field>
         <div class="error" v-html="Error">
         </div>
         <v-btn dark class="cyan" @click="register">Inregistrare</v-btn>
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
        email: this.email,
        password: this.password
      });
      if (response.data === "error") {
        this.Error = "A fost o problema la inregistrare";
      } else {
        this.Error = "";
      }
    }
  },
  components:{
    Panou
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
