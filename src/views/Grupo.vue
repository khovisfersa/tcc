<template>
	<v-container>
		<v-row class="d-flex flex-row">
			<v-col>
				<h1>Grupo: {{grupo.nome}} </h1>
			</v-col>
			<v-col class="d-flex flex-column">
				<span>Nivel: {{grupo.nivel}}</span>
				<span>Telegram: <a>t.me/iuykjas9712w3n</a></span>
			</v-col>
		</v-row>
		<!-- <v-divider></v-divider> -->
		<v-container>
			<h3>Tarefas completas</h3>
			<v-row>
				<v-col cols=8>
					<v-container fluid>
						<v-container v-if="!isFeitas()">
							{{ mensagem }}
						</v-container>
						<v-row v-else dense>
							<v-col v-for="card in feitas" :key="card.title" :cols="4">
								<v-card elevation="10">
			             <v-card-title v-text="'Atividade: ' + card.title"></v-card-title>
			             <v-card-text>
			             	<p>
			             		nivel: {{card.nivel}}
			             	</p>
			             	<p>
			             		nota: {{card.nota}}/5
				            </p>
			             </v-card-text>

			            <v-card-actions>
			              <v-spacer></v-spacer>

			        			<v-btn color="secondary" @click="goToTarefa($route.params.id,card.tarefa_id)">
			        				Ver resposta
			        			</v-btn>
			            </v-card-actions>
			          </v-card>
							</v-col>
							<!-- <v-col v-for="tarefa in feitas" :key="tarefa" :cols="4">
								teste
							</v-col> -->
						</v-row>
					</v-container>
				</v-col>
				<v-col cols=4>
					<v-card width="256" class="mx-auto teste" color="info">
				    <v-navigation-drawer permanent>
				      <v-list-item>
				        <v-list-item-content>
				          <v-list-item-title v-if="isAtiva()" class="text-h6">
				            Tarefa em aberto
				          </v-list-item-title>
				          <v-list-item-title v-else class="text-h6">
				            Nenhuma tarefa aberta
				          </v-list-item-title>
				          <v-list-item-subtitle v-if="isAtiva()" class="d-flex flex-column">
				          	<span>{{ ativa.title }}</span>
				            <v-btn color="secondary" @click="goToTarefaAtiva">visitar</v-btn>
				          </v-list-item-subtitle>
				          <v-list-item-subtitle v-else class="d-flex flex-column">
				            <v-btn class="secondary" color="secondary" @click="goToTarefaAtiva">Nova Atividade</v-btn>
				          </v-list-item-subtitle>
				        </v-list-item-content>
				      </v-list-item>
				    </v-navigation-drawer>
				  </v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-container>
</template>

<script>
	import axios from 'axios';

	export default {
		name: "grupo",
		watcher: {
			grupo: {
				handler(newGrupo) {
				}
			}
		},
		data() {
			return {
				// grupo_id: $route.params.grupo_id,
				mensagem: "Ah, parece que seu grupo ainda não completou nenhuma tarefa.",
				grupo: {nome:"teste"},
				ativa: {},
				feitas:[],
				usuarios:[],
				//////////////////////////////////////////////////////////////
				// grupo: {
				// 	// nome: "Senatus Deorum",
				// 	// partic: 5,
				// 	// nivel: "C1",
				// 	// tarefas_recebidas: 5,
				// 	// tarefas_completas: 3
				// },
				// ativa: {
				// 	// titulo: "teste",
				// },
				// feitas:[
				// 	// {titulo:"Primeira", nivel:"B1", nota: 10},
				// 	// {titulo:"Segudna", nivel:"B2", nota: 10},
				// 	// {titulo:"Terceira", nivel:"C1", nota: 10},
				// 	// {titulo:"Quarta", nivel:"C2", nota: 10},
				// ],
				// usuarios:[]
			}
		},
		created() {
			this.getGroupInfo(this.$route.params.id)
		},
		mounted() {
			this.getGroupInfo(this.$route.params.id)
		},
		computed:{
			// grupoComp: {nome:"teste"},
			// ativa: {},
			// feitas:[],
			// usuarios:[]
		},
		methods: {
			async getGroupInfo(id) {
				await this.axios.get(this.$api + '/get_grupo_by_id/' + id)
				.then((res) => {
					this.grupo = res.data.grupo_info
					this.feitas = res.data.feitos
					this.ativa = res.data.aberto
					this.usuarios = res.data.users
				})
				.catch((err) => {
					console.log("Erro-chan. Yamete onegai shimasu")
					console.log(err)
				})

			},
			async getTarefaAtiva(){
				return 0
			},
			goToTarefaAtiva() {
				this.$router.push({ name: 'tarefa_ativa' })
			},
			isAtiva() {
				if(!!this.ativa) return true
				return false 
			},
			isFeitas() {
				if(!!this.feitas) return true
				return false 
			},
			goToTarefa(grupo_id, tarefa_id) {
				console.log("grupo: " + grupo_id)
				console.log("tarefa: " + tarefa_id)
			}
		}
	}

</script>


<style>
</style>