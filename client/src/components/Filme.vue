<template>
  <v-layout row mt-5>
    <v-flex xs10 offset-xs1>
        <panou title="Toate filmele">
            <div v-for="film in filme" :key="film.titlu">
                <div class="filmCard">
                    <h1>{{film.nume}} - {{film.an}}</h1>
                    <h5>{{film.gen}}</h5>
                    <h2>Nota: {{film.nota}}</h2>
                 </div>
            </div>
        </panou>
        <div v-if="$store.state.isUserLoggedIn">
        <v-btn dark class="cyan" @click="adauga">Adauga</v-btn>
        </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Panou from '@/components/Panou';
import FilmeService from '@/services/FilmeService'
export default {
    components:{
        Panou
    },
    methods:{
        adauga(){
            this.$router.push({
                name:'filme-add'
            })
        }
    },
    data(){
        return {
            filme: null
        }
    },
    async mounted(){
        // do a request to back for all the movies
        this.filme = (await FilmeService.index()).data;
        console.log(this.filme);
    }
}
</script>

<style scoped>
.filmCard{
    text-align: left;
    border: aqua 4px solid;
    margin: 5px;
}
</style>


