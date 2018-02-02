<template>
	<div class="input-group">
		<input class="form-control" type="text" 
		v-model="nuevaTarea" 
		v-on:keyup.enter="agregarTarea" 
		placeholder="Escribe nueva tarea">
		<span class="input-group-btn">
			<button class="btn btn-primary" type="button" v-on:click="agregarTarea">Crear</button>
		</span>
	</div>
</template>
<script>
	export default {
		data(){ //Es igual a: data: function(){}
			return {
				nuevaTarea: ''
			}
		},
		props: ['tareas'],// para traernos el arreglo tareas de app.vue
		methods: {
			agregarTarea: function(){
				var texto = this.nuevaTarea.trim();
				if (texto) {
					this.tareas.push({
						texto: texto,
						terminada: false
					})

					this.$emit('incrementarCont', 1);
				}
				this.nuevaTarea = '';
			},
		}
	}
</script>