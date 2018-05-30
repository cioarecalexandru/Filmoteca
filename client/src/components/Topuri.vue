<template>
    <v-layout row mt-5>
    <v-flex xs10 offset-xs1>
        <panou title="Topuri">
            <div v-for="key in keys" :key="key">
                <div class="top">
                    <h1>{{key}}</h1>
                    <div class="filmeInTop" v-for="film in topuri.get(key).sort(function(a,b){
                        return a.nota < b.nota;
                    })" :key="film.nume">
                        <h5>{{film.nume}} - {{film.an}}</h5>
                        <p>{{film.gen}}</p>
                        <p>Nota: {{film.nota}}</p>
                    </div>
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
import FilmeService from '@/services/FilmeService';
import Panou from '@/components/Panou';
function groupBy(list, keyGetter){
    const map = new Map();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
}
export default {
    components:{
        Panou
    },
    methods:{
    
    },
    data(){
        return {
            filme: null,
            topuri: null,
            keys:null
        }
    },
    async mounted(){
        // do a request to back for all the movies
        this.filme = (await FilmeService.index()).data;
        console.log("Filme    ",this.filme);

        this.topuri = groupBy(this.filme, film => film.gen);
        console.log("Topuri   ",this.topuri);
        console.log("topuri keys   ", this.topuri.keys());
        this.keys = Array.from(this.topuri.keys());
        console.log("keys   ", this.keys);

    }
}
</script>

<style scoped>
.top{
    text-align: left;
    border: cyan 2px solid;
    margin : 2px;
    padding: 2px;
}
.filmeInTop{
    border: cyan 2px solid;
    margin : 2px;
    padding: 2px;
}
</style>

