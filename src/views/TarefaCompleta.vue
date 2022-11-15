<template>
	<v-container>
		<v-card>
			<v-card-title>{{ tarefa.name }}</v-card-title>
			<v-card-text>
				{{ tarefa.text }}
				<v-spacer/>
				{{ tarefa.rubrica }}
			</v-card-text>
		</v-card>
		<v-spacer></v-spacer>
		<v-card class="mt-10">
			<v-card-title>Resposta do grupo</v-card-title>
			<v-card-text v-if="tarefa.tipo == 'texto'">
				{{}}
			</v-card-text>
			<v-card-text v-if="tarefa.tipo == 'audio'">
				<v-container class="d-flex flex-column">
					<span class="ml-10">{{}}</span>
					<audio controls>
						<source src='' type='audio/mpeg'>
					</audio>
				</v-container>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script type="text/javascript">
import axios from 'axios'
import tarefaComponent from '../components/TarefaComponent.vue'
import { mapGetters, mapMutations } from "vuex"
import { getUserId } from '../store/function.js'

export default{
	props:{

	},
	components:{
		tarefaComponent
	},
	data() {
		return {
			tarefa:{
				name: "Nome da tarefa",
				text: "esse é o texto da terefa lalalalalalalalala",
				rubrica: "é Assim que se faz pra dar nota pra essa tarefa",
				tipo: 'audio'
			},
			resposta_texto: [
				{
					text: "texto do primeiro objeto",
					identificador: 1,
					usuario_id: 3
				},
				{
					text: "texto do primeiro objeto",
					identificador: 2,
					usuario_id: 3
				},
				{
					text: "texto do primeiro objeto",
					identificador: 3,
					usuario_id: 3
				},
				{
					text: "texto do primeiro objeto",
					identificador: 4,
					usuario_id: 3
				},
				{
					text: "texto do primeiro objeto",
					identificador: 5,
					usuario_id: 3
				}
			],
		}
	},
	created:{},
	mounted:{},
	computed: {
		...mapGetters(['getToken'])

	},
	methods: {
		...mapMutations(['setToken']),
		getTarefa(tarefa_id) {

		},
		getRespostaTexto() {

		},
		getAudio() {

		}
	}
}
</script>