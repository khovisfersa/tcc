<template>
	<v-container>
		<v-card class="mx-auto px-5 py-5">
			<v-card-title>{{ tarefa1.titulo }}</v-card-title>
			<v-card-subtitle>{{ tarefa1.nivel }}</v-card-subtitle>
			<v-divider></v-divider>
			<v-card-text >
				<v-container>
					{{ tarefa1.texto }}
				</v-container>
				<v-divider></v-divider>
				<v-container>
					<h3>
						Partes em aberto: {{mostrar_card_resposta}}
					</h3>
					<v-row>
						<v-col cols=3>
							<v-list>
								<v-list-item v-for="item in total_partes" :key="item">
									<v-list-item-title v-if="faltantes.includes(item)">
										<v-btn class="secondary" @click="responder(item)">{{ item }}</v-btn>
									</v-list-item-title>
									<v-list-item-title v-else>
										<v-btn disabled>{{ item }}</v-btn>
									</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-col>
						<v-col cols=9>
							<v-card v-if="mostrar_card_resposta">
								<v-card-title>Responder item {{nova_resposta.identificador}}</v-card-title>
								<v-card-text v-if="tarefa1.tipo === 'texto'">
									<v-textarea class="px-5" :label='"resposta ao item "+ nova_resposta.identificador' v-model="nova_resposta.texto" auto-grow outlined name="resposta_texto"></v-textarea>
								</v-card-text>
								<v-card-text v-if="tarefa1.tipo === 'audio'">
					        <VueRecordAudio mode="press" @result="onResult" />

									<v-dialog v-model="showDialog" width="510" persistent>
										<v-template>
											<v-card width="500" height="250">
												<v-card-title>Você está satisfeito com sua resposta?</v-card-title>
												<v-card-actions>
													<v-row>
														<v-col><v-btn class="primary" @click="onAccept">Sim</v-btn></v-col>
														<v-col><v-btn class="warning" @click="onDeny">Não</v-btn></v-col>
													</v-row>
												</v-card-actions>
											</v-card>
										</v-template>
									</v-dialog>
								</v-card-text>
								<v-card-actions>
									<v-btn class="accent" @click="enviarResposta(nova_resposta.texto)">Enviar</v-btn>
								</v-card-actions>
							</v-card>
						</v-col>
					</v-row>
				</v-container>
			</v-card-text>
		</v-card>

	</v-container>
</template>

<script type="text/javascript">
import axios from "axios"

	export default {
		name: "tarefa_ativa",
		props:{
			tarefa: {},
			resposta: {}
		},
		data(){
			return {
				faltantes: [],
				nova_resposta: {},
				data: null,
				mostrar_card_resposta: false,
				total_partes: [1,2,3,4,5],
				showDialog: false,
				tarefa1: { 
					titulo: "El premiero teste", 
					nivel: "A2",
					texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut laoreet mi. Suspendisse potenti. Maecenas eu mattis lectus, id gravida libero. Morbi sit amet molestie libero. Nulla aliquam, felis eget interdum pharetra, nulla libero ornare enim, in imperdiet sem massa eget nulla. Aliquam libero turpis, porta at ullamcorper at, semper nec velit. Phasellus vel faucibus nibh, ut facilisis justo.
						Nunc tincidunt arcu in purus scelerisque euismod. Nunc sollicitudin porta tempor. Nunc tempus suscipit libero, vitae cursus velit blandit a. Morbi pharetra sapien eu justo sagittis, id dapibus ante convallis. Donec vitae turpis pulvinar justo viverra molestie a id eros. Sed cursus, erat at dapibus lobortis, erat sem imperdiet nulla, et tincidunt justo nunc eu lacus. Cras eget purus euismod, dictum erat ac, hendrerit mi. Proin accumsan porta risus ut maximus. Donec lacinia libero quis libero porttitor fringilla.`,
						tipo: "audio",
				},
				resposta1:[
				{
					usuario_id: 1,
					grupo_id: 1,
					tarefa_id: 1,
					identificador: 1,
					filepath:'/'
				},
				{
					usuario_id: 1,
					grupo_id: 1,
					tarefa_id: 1,
					identificador: 2,
					filepath:'/'
				},
				{
					usuario_id: 1,
					grupo_id: 1,
					tarefa_id: 1,
					identificador: 5,
					filepath:'/'
				},
				],

			}
		},
		created() {
			this.getDone(this.resposta1);
		},
		methods:{
			getDone(resposta) {
				let complete = [1,2,3,4,5]
				resposta.forEach((e) => {
					complete.splice(complete.indexOf(e.identificador),1)
				})
				this.faltantes = complete
			},
			responder(item) {
				this.mostrar_card_resposta = true
				this.nova_resposta.identificador = item
				if(this.tarefa1.tipo === "texto") this.nova_resposta.texto = "";
			},
			enviarResposta(value) {
				alert(value)
			},
			callback(msg){
				console.log(msg)
			},
			onResult(data) {
				// alert("AAAAAAAAAAAA-AAAAAAAAAAA")
				console.log("AAAAAA")
				// console.log(data)
				this.data = data
				this.showDialog = true
			},
			onAccept() {
				// let url = '....'

				let data = new FormData()

				data.append('name', 'audio')
				data.append('file', this.data)
				data.append('filename', 'Prikith')

				let config = {
					header: {
						'Content-Type' : 'multipart/form-data'
					}
				}
				this.showDialog = false
				axios.post('http://15.228.46.82:3333/upload_audio', data, config)
				.then(() => {
					console.log("deu bom!")
				})
				.catch(err => {
					console.log(err)
				})

				// try {
				// 	axios.post('http://15.228.46.82:3333/upload_audio', {
				// 		file: this.data
				// 	})
				// 	.then( (res) => {
				// 		// alert(res)
				// 		console.log(this.data)
				// 	})
				// 	.catch( (err) => {
				// 		console.log(err)
				// 	})
				// } catch(err) {

				// }
			},
			onDeny() {
				this.showDialog = false
				this.data = null
			}
		}
	}
</script>