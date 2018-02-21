<template>
	<ul class="list-group">
		<li class="list-group-item" v-for="( tarea, index ) in tareas" :key="index"
									v-bind:class="{ terminada: tarea.terminada }">
			{{ tarea.texto }}
			<span class="float-right">
				<button type="button" class="btn btn-danger btn-xs"
				v-on:click="eliminarTarea(index)"><i class="material-icons">close</i></button>
			</span>
			<span class="float-right">
				<button type="button" class="btn btn-success btn-xs" v-on:click="tarea.terminada = !tarea.terminada"><i class="material-icons">done</i></button>
			</span>
		</li>
	</ul>
</template>
<script>
	import { bus } from './main.js'
	export default{
		props: ['tareas'],
		methods:{
			eliminarTarea: function(index){
				this.tareas.splice(index, 1);
				bus.actualizarContador(this.tareas.length);
			}
		}
	}
</script>
<!-- <style scoped> se utiliza para que el estilo dentro solo sea para este componente-->
<style>
	.btn-xs{
		width: 30px;
	    height: 30px;
	    padding: 0;
	    margin-right: 6px;
	}
	.terminada{
		color: gray;
		text-decoration: line-through !important;
	}
</style>