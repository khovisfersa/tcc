<template>
	<v-container>
		<v-row>
			<h1>{{grupo.nome}} - {{grupo.nivel}}</h1>
		</v-row>
		<!-- <v-divider></v-divider> -->
		<v-container>
			<v-row>
				<v-col cols=8>
					<v-container fluid>
						<v-row dense>
							<v-col v-for="card in feitas" :key="card.titulo" :cols="4">
								<v-card elevation="10">
			             <v-card-title v-text="card.titulo"></v-card-title>
			             <!-- <v-card-subtitle v-text="card.idioma + ' - ' + card.nivel"></v-card-subtitle> -->
			             <v-card-text>
			             	<p>
			             		nivel: {{card.nivel}}
			             	</p>
			             	<p>
			             		nota: {{card.nota}}
				            </p>
			             </v-card-text>

			            <v-card-actions>
			              <v-spacer></v-spacer>

			        			<v-btn color="secondary" @click="goToGroup(card.id)">
			        				Ver grupo
			        			</v-btn>
			            </v-card-actions>
			          </v-card>
							</v-col>
						</v-row>
					</v-container>
				</v-col>
				<v-col cols=4>
					<v-card height="400" width="256" class="mx-auto">
				    <v-navigation-drawer permanent>
				      <v-list-item>
				        <v-list-item-content>
				          <v-list-item-title class="text-h6">
				            Tarefa em aberto
				          </v-list-item-title>
				          <v-list-item-subtitle>
				            <router-link to="/">{{ ativa.titulo }}</router-link>
				          </v-list-item-subtitle>
				        </v-list-item-content>
				      </v-list-item>

				      <v-divider></v-divider>
				      <p class="mx-auto">Partes em aberto</p>
				      <v-list dense nav>
				        <v-list-item v-for="open in ativa.partes.abertas" :key="open" link>
				          <v-list-item-icon>
				            <v-icon>{{ open }}</v-icon>
				          </v-list-item-icon>
				        </v-list-item>
				      </v-list>
				      <v-divider></v-divider>
							<p class="mx-auto ">Partes em aberto</p>
				      <v-list dense nav>
				        <v-list-item v-for="done in ativa.partes.feitas" :key="done" link>
				          <v-list-item-icon>
				            <v-icon>{{ done }}</v-icon>
				          </v-list-item-icon>
				        </v-list-item>
				      </v-list>
				    </v-navigation-drawer>
				  </v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-container>
</template>

<script>
	export default {
		name: "grupo",

		data() {
			return {
				grupo: {
					nome: "Senatus Deorum",
					partic: 5,
					nivel: "C1",
					tarefas_recebidas: 5,
					tarefas_completas: 3
				},
				ativa: {
					titulo: "teste",
					partes:{
						abertas:["Domingo", "Alberto", "Niméia"],
						feitas: ["Asmodeus", "Valak"]
					}
				},
				feitas:[
					{titulo:"Primeira", nivel:"B1", nota: 10},
					{titulo:"Segudna", nivel:"B2", nota: 10},
					{titulo:"Terceira", nivel:"C1", nota: 10},
					{titulo:"Quarta", nivel:"C2", nota: 10},
				]
			}
		},
		created() {
			this.getGroupInfo(this.$route.params.id)
		},
		methods: {
			async getGroupInfo(id) {
				return 0
			},
			async getTarefaAtiva(){
				return 0
			}
		}
	}

</script>

<style>
.active-task{

}

</style>