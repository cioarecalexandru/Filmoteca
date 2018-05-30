<template>
    <v-layout>
        <v-flex md10 offset-md-1>
        <panou title="Adauga film">
            <v-text-field label="Nume" v-model="film.nume"></v-text-field>
            <v-text-field label="An" v-model="film.an"></v-text-field>
            <v-text-field label="Gen" v-model="film.gen"></v-text-field>
            <v-text-field label="Nota" v-model="film.nota"></v-text-field>
        </panou>
        <v-btn v-if="$store.state.isUserLoggedIn" dark class="cyan" @click="adauga">Adauga</v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
import Panou from '@/components/Panou'
import FilmeService from '@/services/FilmeService'
export default {
    data(){
        return {
            film:{
            nume: null,
            an: null,
            nota: null,
            gen: null
            }
        }
    },
    components:{
        Panou
    },
    methods:{
        async adauga(){
            try{
                await FilmeService.adauga(this.film);
                this.$router.push({
                    name:'filme'
                });
            }
            catch(err){
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>

</style>
