/*var app = new Vue({
	el: '.vue',
	data:{
		mensaje: 'APrende Vue.js',
		src: 'https://vuejs.org/images/logo.png'
	},
	//methods: {
		//mostrarMensaje: function function_name() {
		//	return 'Interpolacion por metodo.'
		//}
	//}
	methods: {
		mostrarMensaje: function function_name() {
			return this.mensaje;
		}
	}
})*/
// GANCHOS DEL CLICLOS DE VIDA EN CODIGO ///
/*var vm = new Vue({
	el: "#vm",
	data: {
		mensaje: 'Este es el mensaje'
	},
	beforeCreate : function() {
		console.log('llamando beforeCreate');
	},
	created : function() {
		console.log('llamando created');	
	},
	beforeMount : function() {
			console.log('llamando beforeMount');	
	},
	mounted : function() {
			console.log('llamando mounted');	
	},
	beforeUpdate : function() {
			console.log('llamando beforeUpdate');	
	},
	updated : function() {
			console.log('llamando updated');	
	},
	beforeDestroy : function() {
			console.log('llamando beforeDestroy');	
	},
	destroyed : function() {
			console.log('llamando destroyed');	
	},
	methods : {
		destruir: function() {
			this.$destroy();//$= para saber que es parte de vue "destroy"
		}
	}
})*/
// FIN GANCHOS DEL CLICLOS DE VIDA EN CODIGO ///

// COMPUTED PROPERTIES///
/*new Vue({
	el: "#vm",
	data: {
		primero : 0,
		segundo : 0,
		tercero : 0,
		cuarto : 0,
		suma: 0
	},
	computed: { //SIEMPRE SERA CALCULADA SI ALGUNO CAMBIA
		total: function(){
			return this.primero + this.segundo + this.tercero + this.cuarto;
		}
	}
})*/
// FIN COMPUTED PROPERTIES///

// ENLACE DE DATOS DOBLES /////
/*new Vue({
	el: "#vm",
	data: {
		nombre: 'Alejandro'
	}	
})*/
// FIN ENLACE DE DATOS DOBLES /////
new Vue({
	el: "#vm",
	data: {
		imagen: 'http://lorempixel.com/400/200/',
		mostrar: false
	}
})