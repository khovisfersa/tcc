<template>
	<v-container>
		<v-card>
			<v-card-title>
				Criar nova tarefa
			</v-card-title>
			<v-card-text>
				<v-form>
					<v-text-field v-model="tarefa.titulo" label="Título" required />
					<v-text-field v-model="tarefa.nivel" label="Nível" required />

					<v-select v-model="tarefa.tipo" :items="dd_options" label="Tipo de atividade" required></v-select>

					<v-textarea v-model="tarefa.text" label="Texto" auto-grow outlined required></v-textarea>
					<v-textarea v-model="tarefa.rubrica" label="Rúbrica" auto-grow outlined required/></v-textarea>
				</v-form>
			</v-card-text>
			<v-card-actions>
				<v-btn color="primary" @click="submit(tarefa)" label="Submit">Submit</v-btn>
			</v-card-actions>
		</v-card>
	</v-container>
</template>

<script type="text/javascript">
import axios from 'axios'
export default {
	data:() => ({
		dd_options: ["Audio", "Text"],
		tarefa: {
			titulo:'',
			nivel:'',
			tipo:'',
			text:'',
			rubrica:''
		}
	}),
	methods: {
		submit(tarefa) {
			console.log(this.tarefa)
		}
	}
}
</script>