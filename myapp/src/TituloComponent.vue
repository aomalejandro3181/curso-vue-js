<template>
<div>
	<h2>{{ titulo }}</h2>
	<h4>Tareas a hacer: {{ numTareas }}</h4>
</div>
</template>
<script>
	import { bus } from './main.js'
	export default {
		props: ['titulo'],
		data(){
			return{
				numTareas : 0
			}
		},
		created(){
			bus.$on('actualizarContador', (numTareas)=>{
				this.numTareas = numTareas;
			})
		}
	}
</script>