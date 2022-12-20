 <template>
	<v-container>
		<v-card class="mx-auto px-5 py-5">
			<v-card-title>{{ tarefa1.title }}</v-card-title>
			<v-card-subtitle>nivel: {{ tarefa1.nivel }}</v-card-subtitle>
			<v-divider></v-divider>
			<v-card-text >
				<v-container>
					{{ tarefa1.text }}
				</v-container>
				<v-divider></v-divider>
				<v-container>
					<v-row>
						<v-col cols=3>
							<v-list>
								<v-list-item v-for="item in total_partes" :key="item">
									<v-list-item-title v-if="resposta1.includes(item)">
										<v-btn disabled>{{ item }}</v-btn>
									</v-list-item-title>
									<v-list-item-title v-else>
										<v-btn class="secondary" @click="responder(item)">{{ item }}</v-btn>										
									</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-col>
						<v-col cols=9>
							<v-card v-if="mostrar_card_resposta">
								<v-card-title>Responder item {{ identificador }}</v-card-title>
								
								<v-card-text v-if="tarefa1.tipo === 'texto'">
									<v-textarea class="px-5" :label='"resposta ao item "+ nova_resposta.identificador' v-model="texto" auto-grow outlined name="resposta_texto"></v-textarea>
								</v-card-text>
								<v-card-text v-if="tarefa1.tipo === 'audio'">
					        <!-- <VueRecordAudio mode="press" @result="onResult" />	 -->
					        <v-card-subtitle><a href="https://online-voice-recorder.com/pt/" target="_blank">Aplicação para gravação de audios</a></v-card-subtitle>
					        <v-form>
						        <v-file-input accept=".mp3"  show-size v-model="file" label="Selecione o arquivo"/>
						       </v-form>
								</v-card-text>
								<v-card-actions>
									<v-btn v-if="this.tarefa1.tipo == 'texto'" class="accent" @click="enviarResposta(nova_resposta.texto)">Enviar</v-btn>
									<v-btn v-else class="accent" @click="onAccept()">Enviar</v-btn>
								</v-card-actions>
							</v-card>
						</v-col>
					</v-row>
				</v-container>
			</v-card-text>
		</v-card>
		<router-view></router-view>
	</v-container>
</template>

<script type="text/javascript">
import axios from "axios"
import { mapGetters, mapMutations } from "vuex"
import { getUserId } from '../store/function.js'

// Para produção trocar as instâncias de tarefa1 por tarefa

	export default {
		name: "tarefa_ativa",
		data(){
			return {
				faltantes: [],
				tarefa_id: null,
				texto: '',
				nova_resposta: {},
				data: null,
				file: null,
				identificador: null,
				mostrar_card_resposta: false,
				total_partes: [1,2,3,4,5],
				showDialog: false,
				tarefa1: {},
				resposta1:{},

			}
		},
		created() {
			// this.getTarefaInformation(localStorage.grupo_id);
			// this.getDone(this.resposta1);
			// this.$store.getters.

		},
		mounted() {
			this.getTarefaInformation(localStorage.grupo_id);
			// this.getDone(this.resposta1)
		},
		computed: {
			...mapGetters(['getToken', 'getUserId', 'getGrupoId'])
			// this.getDone(this.resposta1)
		},
		methods:{
			...mapMutations(['setToken']),
			async getTarefaInformation(grupo_id){
				//get tarefa ativa (enunciado, etc...)
				await axios.get(this.$api + '/tarefa_ativa/' + grupo_id)
				.then((res) => {
					this.tarefa1 = res.data.tarefa_info
					console.log(this.tarefa1)
					this.resposta1 = res.data.identificadores
				})
				this.getTarefaBase(this.tarefa1.tarefa_id)
				//get respostas da tarefa ativa
			},
			async getTarefaBase(tarefa_id) {
				let config = {
					header: {
						'Content-Type' : 'multipart/form-data',
						'x-access-token' : localStorage.token
					}
				}
				await axios.get(this.$api + '/tarefa/' + tarefa_id)
				.then((res) => {
					this.tarefa1.titulo = res.data.title
					this.tarefa1.nivel = res.data.nivel
					this.tarefa1.texto = res.data.text
					this.tarefa1.rubrica = res.data.rubrica
					this.tarefa1.tipo = res.data.tipo
				})
				.catch(err => {
					console.log(err)
				})
			},
			getDone(resposta) {
				console.log("get done")
				let complete = [1,2,3,4,5]
				// alert(resposta)
				resposta.forEach((e) => {
					console.log("entrou no loop")
					complete.splice(complete.indexOf(e),1)
				})
				this.faltantes = complete
			},
			responder(item) {
				this.identificador = item
				this.mostrar_card_resposta = true
				this.nova_resposta.identificador = item
				if(this.tarefa1.tipo === "texto") this.nova_resposta.texto = "";
			},


			async enviarResposta(value) {

				let resposta_info = {
					tarefa_id: this.tarefa1.tarefa_id,
					grupo_id: localStorage.grupo_id,
					usuario_id: localStorage.usuario_id,
					identificador: this.identificador,
					text: this.texto
				}

				console.log(resposta_info)

				await axios.post(this.$api + "/create_resposta", resposta_info)
				.then((res) => {
					alert("resposta enviada com sucesso")
				})
				.catch((err) => {
					alert("erro! " + err)
				})
			},


			onResult(data) {
				console.log("AAAAAA")
				this.data = data
				const confirmar = window.confirm("Deseja eviar o áudio gravado?")
				if(confirmar) {
					this.onAccept()
				} else {
					this.onDeny()
				}
			},


			async onAccept() {
				// let url = '....'

				// getUserId()
				console.log("get token: " + localStorage.token)
				
				let data = new FormData()

				data.append('name', 'audio')
				data.append('file', this.file)
				data.append('grupo_id', localStorage.grupo_id)
				data.append('usuario_id', localStorage.usuario_id)
				data.append('tarefa_id', this.tarefa1.tarefa_id)
				data.append('identificador', this.identificador)

				let user_id = localStorage.usuario_id

				let config = {
					header: {
						'Content-Type' : 'multipart/form-data',
						'x-access-token' : localStorage.token,
						'grupo_id' : this.grupo_id,
						'user_id' : this.usuario_id
					}
				}

				// console.log(config)

				await axios.post(this.$api + '/upload_audio', data, config)
				.then(() => {
					console.log("deu bom!")
					this.file = '' 
					this.$router.go()
				})
				.catch(err => {
					console.log(err)
					console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
				})
			},


			onDeny() {
				// this.showDialog = false
				this.data = null
			}
		}
	}
</script>