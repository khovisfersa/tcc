<template>
	<v-container>
		<v-card>
			<v-card-title class="secondary">{{ username }}</v-card-title>
			<v-card-subtitle>
				<v-chip v-if="getIsAdmin" @click="goToAdmin()" class="warning ml-3">Admin</v-chip>
				<v-chip v-if="getIsConteudista" @click="goToConteudista()" class="warning ml-3">Conteudista</v-chip>
			</v-card-subtitle>
			<v-card-content class="px-5">
				<v-row class="mx-5">
					<v-col cols=6>
						<v-card>
							<v-card-title class="primary">{{ grupo.nome }}  ({{grupo.idioma}})</v-card-title>
							<v-card-text>
								<v-list>
									<v-list-item>link do telegram: <a>{{grupo.link}}</a></v-list-item>
								</v-list>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col cols=6>
						<v-card>
						</v-card>
					</v-col>
				</v-row>
			</v-card-content>
		</v-card>
	</v-container>
</template>

<script type="text/javascript">
	import {mapGetters, mapMutations} from 'vuex'
	import axios from 'axios'
	import {} from '../store/function.js'


	export default {
		name: "loggedHome",
		props: {

		},
		data:() => ({
			username: '',
			grupo:{
				nome:"Senatus Deorum",
				idioma: "Latim",
				link:"t.me/ioudfkjsadfohjsadfbiu..."
			}
		}),
		computed:{
			...mapGetters(['getUserToken', 'getUser', 'getIsConteudista', 'getIsAdmin']),
		},
		mounted() {
			this.username = this.$store.getters.getUser
		},
		methods:{
			...mapMutations([]),
			getUsername() {
				// axios.get('/user_name')
			},
			goToAdmin() {
				console.log("fuck you")
			},
			goToConteudista (){
				console.log("fuck you too")
			},
			async getUserGrupos() {
				// await axios.get('/')
			},
			getGrupoInfo () {

			}
		}

	}
</script>