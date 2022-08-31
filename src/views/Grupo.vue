<template>
	<v-container>
		
	</v-container>
</template>

<script>
	export default {
		name: "grupo",
		data() {
			return {
				grupo: {
					nome: "nome do Grupo",
					partic: 5,
					nivel: "C1",
					tarefas_recebidas: 5,
					tarefas_completas: 3
				}
			}
		},
		created() {
			this.getGroupInfo(this.$route.params.id)
		},
		methods: {
			async getGroupInfo(id) {
				return 0
			}
		}
	}

</script>