var data ={
		titulo: 'Lista de Tareas',
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
		],
		nuevaTarea: ''
	}

Vue.component('titulo',{
	template: '<h2>{{ titulo }}</h2>',//que html usar
	data: function() {
		return { titulo: 'Lista de Tareas'}
	}
})

Vue.component('nueva-tarea',{
	template: `<div class="input-group">
					<input class="form-control" type="text" 
					v-model="nuevaTarea" 
					v-on:keyup.enter="agregarTarea" 
					placeholder="Escribe nueva tarea">
					<span class="input-group-btn">
						<button class="btn btn-primary" type="button" v-on:click="agregarTarea">Crear</button>
					</span>
				</div>`,
	data: function(){
		return data;
	},
	methods: {
		agregarTarea: function(){
			var texto = this.nuevaTarea.trim();
			if (texto) {
				this.tareas.push({
					texto: texto,
					terminada: false
				})
			}
			this.nuevaTarea = '';
		},
	}
})

Vue.component('lista-de-tareas',{
	template: `<ul class="list-group">
					<li class="list-group-item" v-for="(tarea, index) in tareas" v-bind:class="{terminada: tarea.terminada}">
						{{ tarea.texto }}
						<span class="float-right">
							<button type="button" class="btn btn-danger btn-xs"
							v-on:click="eliminarTarea(index)"><i class="material-icons">close</i></button>
						</span>
						<span class="float-right">
							<button type="button" class="btn btn-success btn-xs" v-on:click="tarea.terminada = !tarea.terminada"><i class="material-icons">done</i></button>
						</span>
					</li>
				</ul>`,
	data: function(){
		return data;
	},
	methods:{
		eliminarTarea: function(index){
			this.tareas.splice(index, 1);
		}
	}
})

var app = new Vue({
	el: '.app',
	data: data,
	/*data: {
		titulo: 'Lista de Tareas',
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
		],
		nuevaTarea: ''
	},*/
	methods: {
		/*agregarTarea: function(){
			var texto = this.nuevaTarea.trim();
			if (texto) {
				this.tareas.push({
					texto: texto,
					terminada: false
				})
			}
			this.nuevaTarea = '';
		},*/
		/*eliminarTarea: function(index){
			this.tareas.splice(index, 1);
		}*/
	}
})