<template>
<v-container>
	<v-container>
		<v-card>
			<v-card-title>
				<h2> Tarefa: {{ tarefa.title }}</h2>
			</v-card-title>
			<v-card-text>
				<h2 class="mb-2">Texto da tarefa</h2>
				{{ tarefa.text }}
				<v-divider class="my-5" />
				<h2 class="mb-2">Rubrica</h2>
				{{ tarefa.rubrica }}
			</v-card-text>
		</v-card>
		<v-spacer></v-spacer>
		<v-card class="mt-10">
			<v-card-title class="d-flex justify-space-between">
				<p>Resposta do grupo</p>
				<p>{{avg}}</p>
			</v-card-title>
			<v-card-text v-if="tarefa.tipo == 'texto'">
				<!-- ------------------------------------------- TEXTO -------------------------------------------- -->
				<v-container class="d-flex flex-column">
					<v-card elevation="0" outlined v-for="tar in respostas" :key="tar.identificador">
						<v-card-title>Parte: {{tar.identificador}}</v-card-title>
						<v-card-text>
							{{tar.text}}
							<v-divider v-if="!isMine & !comented"></v-divider>
							<v-rating v-if="!isMine & !comented"
			          v-model="nota[tar.identificador]"
			          color="yellow darken-3"
			          background-color="grey darken-1"
			          half-increments
			          hover
			          size="25"
			        ></v-rating>
						</v-card-text>
					</v-card>
				</v-container>
			</v-card-text>
			<v-card-text v-if="tarefa.tipo == 'audio'">
	<!---------------------------------------------- Audio ---------------------------------- -->
				<v-container class="d-flex flex-column">
					<v-card elevation=0 v-for="resp in respostas" :key="resp.identificador">
						<v-card-title>{{resp.identificador}}</v-card-title>
						<v-card-text class="d-flex flex-row justify-start">
							<audio controls class="mr-15" >
								<source :src='getAudio(resp.identificador)' type='audio/mpeg'>
							</audio>
							<v-rating 
								class="ml-15"
								v-if="!isMine & !comented"
			          v-model="nota[resp.identificador]"
			          color="yellow darken-3"
			          background-color="grey darken-1"
			          half-increments
			          hover
			          size="25"
			        ></v-rating>
						</v-card-text>
						<v-divider></v-divider>
					</v-card>	
				</v-container>
			</v-card-text>
	<!---------------------------------------------- Envio ---------------------------------- -->
			<v-card-actions v-if="!isMine & !comented">
				<v-col >
					<v-textarea outlined auto-grow v-model="comentario" label="Escreva um comentário sobre a tarefa!"></v-textarea>
					<v-btn class="" color="secondary" @click="makeAvaliacao()"> Enviar </v-btn>
				</v-col>
			</v-card-actions>
		</v-card>
	</v-container>
	<!---------------------------------------------- comentarios ---------------------------------- -->
	<v-container>
		<v-card class="pb-10">
			<v-card-title>Comentários</v-card-title>
			<v-card-text>
				<v-template v-for="comment in comentarios" :key="comment.usuario_id">
					<v-card elevation="0" outlined>
						<v-card-title>
							<v-rating
			          v-model="comment.nota"
			          color="yellow darken-3"
			          background-color="grey darken-1"
			          half-increments
			          hover
			          readonly
			          size="25"
			        ></v-rating>
						</v-card-title>
						<v-card-text>
							{{ comment.comentario }}
						</v-card-text>
					</v-card>
					<v-divider></v-divider>
				</v-template>
			</v-card-text>
		</v-card>
	</v-container>
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
			isMine: false,
			comented: false,
			tarefa:{},
			nota: [0,0,0,0,0],
			comentario: '',
			respostas_texto:[],
			respostas_audio: [],
			comentarios: [
				{
					nota: 4.5,
					text: "Tarefa muito bem feita. Gramatica quase impecável. o numero 3 só trocou there por they're, mas super normal",
					usuario_id: 1	
				},
				{
					nota: 1.5,
					text: " o numero 3 só trocou there por they're, mas super normal",
					usuario_id: 12	
				}
			],
		}
	},
	async created() {
		await this.getTarefa(this.$route.params.tarefa_id)
		await this.getRespostaTexto()
		await this.jaComentei()
		await this.getAvaliacoes()
		this.isThisMine()
	},
	mounted:{},
	computed: {
		...mapGetters(['getToken', 'getUserId', 'getGrupoId']),
		avg() {
			let sum = 0
			this.nota.forEach(e=> {
				sum = sum + e
			})
			return sum/5
		},
		respostas() {
			return this.respostas_texto
		},
	},
	methods: {
		...mapMutations(['setToken']),
		async getTarefa(tarefa_id) {
			await axios.get(this.$api + '/tarefa/' + tarefa_id)
			.then((res) => {
				this.tarefa = res.data
			})
			.catch((err) => {
				console.log(err)
			})
		},

		isThisMine() {
			if(this.getGrupoId == this.$route.params.grupo_id) this.isMine = true
			console.log(this.isMine)
		},

		async jaComentei() {
			await axios.get(this.$api + '/ja_comentei/' + this.$route.params.grupo_id + '/' + this.$route.params.tarefa_id + '/' + this.getUserId)
			.then((res) => {
				this.comented = res.data
				console.log(this.comented)
			})
			.catch((err) => {
				console.log(err)
			})
		},

		async getRespostaTexto() {
			await axios.get(this.$api + '/get_respostas_texto/' + this.$route.params.grupo_id + '/' + this.$route.params.tarefa_id)
			.then((res) => {
				this.respostas_texto = res.data
				console.log(res.data)
				console.log(this.respostas_texto)
			})
			.catch((err) => {
				console.log(err)
			})
		},

		getAudio(identificador) {
			let name = this.$route.params.grupo_id + '-' + this.$route.params.tarefa_id + '-' + identificador

			return this.$api + '/audio_by_name/' + this.$route.params.grupo_id + '/' + name
		},

		async getAvaliacoes() {
			let link = this.$route.params.grupo_id + '/' + this.$route.params.tarefa_id
			await axios.get(this.$api + '/avaliacoes/' + link )
			.then((res) => {
				console.log(res.data)
				this.comentarios = res.data
			})
			.catch((err) => {
				console.log(err)
			})
		},

		async makeAvaliacao() {
			await axios.post(this.$api + '/make_avaliacao',{
				usuario_id: this.getUserId,
				grupo_id: this.$route.params.grupo_id,
				tarefa_id: this.$route.params.tarefa_id,
				comentario: this.comentario,
				nota: this.avg
			})
			.then(async (res) => {
				// await this.getAvalicoes()
				this.comentario = ''
				this.$router.go()
			})
			.catch((err) => {
				console.log("erro")
				console.log(err)
			})
		},


	}
}
</script>