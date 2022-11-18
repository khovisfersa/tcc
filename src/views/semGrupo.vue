<template>
	<v-container>
		Grupos ainda não completos
		<v-container>
			<v-row dense>
				<v-col v-for="grupo in grupos" :key="grupo.nome" :cols="4">
					<v-card elevation="10">
             <v-card-title v-text="'Grupo: ' + grupo.nome"></v-card-title>
             <v-card-text>
             	<p>
             		Idioma: {{grupo.idioma}}
	            </p>
             	<p>
             		Nivel: {{grupo.nivel}}
             	</p>
             	<p>
             		Número de usuários: {{grupo.qt_usuarios}}/5
             	</p>
             </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

        			<v-btn color="secondary" @click="goToGrupo(grupo.grupo_id)">
        				Entrar em grupo
        			</v-btn>
            </v-card-actions>
          </v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-container>
</template>

<script type="text/javascript">
import axios from 'axios';
import { mapGetters, mapMutations } from "vuex"


export default {
	data() {
		return {
			grupos:[]
		}
	},
	async created() {
		await this.getGroupsInfos()
	},
	computed:{
			...mapGetters(['getToken'])

	},
	methods: {
		async getGroupsInfos() {
			await axios.get(this.$api + '/open_groups')
			.then((res) => {
				this.grupos = res.data.grupos
			})
			.catch((err) => {

			})
		},
		async goToGrupo(id) {
			await axios.post(this.$api + '/entrar_em_grupo',{
				usuario_id: localStorage.usuario_id,
				grupo_id: id
			})
			.then((res) => {
				this.$router.push({path: '/grupo/' + id})
			})
		}
	}
}
</script>