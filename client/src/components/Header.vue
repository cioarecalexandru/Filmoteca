<template>
  <v-toolbar dark fixed color="cyan">
    <v-toolbar-title class="mr-4">
      <span class="home" @click="navigateTo({name: 'root'})">
        Filmoteca
      </span>
    </v-toolbar-title>
    <v-toolbar-items>
    <v-btn flat dark @click="navigateTo({name: 'filme'})">Filme</v-btn>
    <v-btn flat dark @click="navigateTo({name: 'top'})">Topuri</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items >
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo({name:'login'})">
        Logare
      </v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo({name:'register'})">
        Inregistrare
      </v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="logout">
        Delogare
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      console.log(route);
      this.$router.push(route);
    },
    logout(){
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push({
        name: 'root'
      })
    }
  }
};
</script>F

<style scoped>
.btn {
  padding: 0px;
}
.home{
  cursor:pointer;
}
.home:hover{
  color:black;
}
</style>