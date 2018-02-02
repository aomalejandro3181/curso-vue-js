<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo v-bind:titulo="titulo"></titulo>
      {{ numTareas }}
      <nueva-tarea v-bind:tareas="tareas" 
                   v-on:incrementarCont="numTareas += $event"></nueva-tarea>
      <lista-de-tareas v-bind:tareas="tareas"></lista-de-tareas>
    </div>
  </div>
</template>

<script>
import Titulo from './TituloComponent.vue'
import NuevaTarea from './NuevaTareaComponent.vue'
import ListaDeTareas from './ListaDeTareasComponent.vue'
export default {
  components:{ // Aca se agregan los componentes que es exportaron (import)
    Titulo,
    NuevaTarea,
    ListaDeTareas
  },
  data(){
    return {
      titulo: '- Lista de Tareas -',
      numTareas: 3,
      tareas: [
        {
          texto: 'Aprender Vue.js',
          terminada: false
        },
        {
          texto: 'Aprender Angular 2',
          terminada: false
        },
        {
          texto: 'Aprender Ionic',
          terminada: false
        }
      ]
    }
  }
}
</script>

<style>

</style>
