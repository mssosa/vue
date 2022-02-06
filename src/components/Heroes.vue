<template>
    <div class="container">
        <div class="form-group">
            <label class="text-white" for>Nombre del heroe</label>
            <input type="text" class="form-control" name id aria-describedby="helpId" placeholder='Ingrese un nuevo heroe' v-model="newHeroName"/>
            <small id="helpId" class="form-text text-muted text-red" v-show="newHeroName.length===0">El nombre del heroe NO puede estar vacio</small>
        </div>
        <div class="form-group" v-show="newHeroName.length > 0">
          <label class="text-white" for="">Descripción del heroe</label>
          <input type="text" class="form-control" name="" id="" aria-describedby="helpId" v-model="newHeroNameDescprition" placeholder="Ingrese la descripción">
        </div>

        <input name="" id="btnAddHeroe" class="btn btn-primary btn-block" type="button" @click="addHero" 
        v-bind:disabled="newHeroName.length == 0"
        value="Agregar">
        
        <i class="fa fa-italic " aria-hidden="true">
            <h4 class="text-white mt-2">Lista de heroes</h4>
        </i>
        <ul class="list-group">
            <li class="list-group-item" v-for="(hero, index) in heroes" :key="index">
            <i class="fa fa-bolder" aria-hidden="true">{{ hero.name }} - </i> {{hero.description}}
        
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Heroes",
    data() {
        return {
            newHeroName: '',
            newHeroNameDescprition: '',
            heroes: [
                {name:'Spider-man', description: "Es un super heroe trepamuros"},
                {name:'Iron-man', description: "Es un super heroe tecnologico"},
                {name:'Hulk', description: "Es un super heroe bruto"},
                {name:'Thor', description: "Es un super heroe mitológico"},
            ],
        }
    },
    methods: {
        addHero(){
            if(this. newHeroName.length > 0)
            {
                this.heroes.push({name: this.newHeroName, description: this.newHeroNameDescprition});

                this.newHeroName = '';
                this.newHeroNameDescprition = '';
            }
        }
    },

}
</script>

<style lang="scss" scoped>
</style>