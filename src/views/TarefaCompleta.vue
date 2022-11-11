<template>
	<v-container>
		<v-card>
			<v-card-title>{{ tarefa.name }}</v-card-title>
		</v-card>
	</v-container>
</template>

<script type="text/javascript">
import axios from 'axios'
import tarefaComponent from '../components/TarefaComponent.vue'

export default{
	props:{
		tarefa:{
			name:"Nome da tarefa"
		}
	},
	components:{
		tarefaComponent
	},
	data: () => {

	}
}
</script>