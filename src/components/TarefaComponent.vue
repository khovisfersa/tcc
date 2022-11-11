<template>
	<v-container>
		<v-card>
			<v-card-title>{{ dados.tarefa_nome }}</v-card-title>
			<v-card-text>
				
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script type="text/javascript">

import axios from 'axios'

export default {
	props:{
		dados:{
			tarefa_nome: "teste",
			grupo_id: null,
			tarefa_id: null,
		}
	},
	methods:{ 
		getAudioByName() {
			// pegar cada elemento de uma resposta no servidor, seja de áudio ou de texto
			axios.get('/audio_by_name/4-2-1')
			.then((req,res) => {
				return res.data
			})
			.catch((err) => {
				console.log("err: " + err)
			})
		},

		getRespostaContent() {
			axios.get('')
		}
	}
}	
</script>
