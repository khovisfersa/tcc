<template>
	<v-container>
		<v-row>
			<v-col :cols="4">
				<v-autocomplete clearable :items="idiomas" label="Idioma"></v-autocomplete>
			</v-col>
			<v-col :cols="4">
				<v-autocomplete :items="niveis" label="Nível" ></v-autocomplete>
			</v-col>
		</v-row>
		<v-container fluid>
			<v-row dense>
        <v-col
          v-for="card in grupos"
          :key="card.title"
          :cols="4"
        >
          <v-card elevation="10">
             <v-card-title v-text="card.nome"></v-card-title>
             <v-card-subtitle v-text="card.idioma + ' - ' + card.nivel"></v-card-subtitle>
             <v-card-text>
             	<p>
             		Participantes: {{card.partic}}/10 <br/>
	             	Atividades Resolvidas: {{card.resolv}}
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
	</v-container>
</template>

<script>

export default {
	name: "buscaDeGrupos",
	data(){
		return {
			idioma: null,
			idiomas: ["inglês", "japones"],
			niveis: ["A1", "A2", "B1", "B2","C1", "C2"],
			grupos:[
					{id:1,	nome:"grupo 1", idioma:"Inglês", nivel:"A1", partic:5, resolv:10	},
					{id:2,	nome:"grupo 2", idioma:"Inglês", nivel:"A2", partic:5, resolv:10	},
					{id:3,	nome:"grupo 3", idioma:"Inglês", nivel:"B2", partic:5, resolv:10	},
					{id:4,	nome:"grupo 4", idioma:"Inglês", nivel:"C1", partic:5, resolv:10	},
			],
		}
	},
	methods:{
		async getIdiomas() {

		},

		async getGrupos(idioma) {

		},
		goToGroup(id) {
			console.log(id)
			this.$router.go({path:"/grupos/:id", params:{id:id}})
		}
	}
}
	
</script>