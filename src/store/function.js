import store from '../store'
import axios from 'axios'

export async function getUserId (token) {
	let config = {
		header: {
			'Content-Type' : 'multipart/form-data',
			'x-access-token' : token
		}

	}

	console.log(config)
	axios.get('/user_id', config)
	.then((req,res) => {
		return res.data.user_id
	})
	.catch((err) => {
		console.log(err)
	})

}


export async function getGrupoId (token) {
	let config = {
		header: {
			'Content-Type' : 'multipart/form-data',
			'x-access-token' : token
		}

	}

	console.log(config)
	axios.get('/user_id', config)
	.then((req,res) => {
		return res.data.user_id
	})
	.catch((err) => {
		console.log(err)
	})

}


// export async function updateToken( token ) {
// 	this.localStorage.setItem('token', token)
// 	store.commit('setToken', token)
// 	// store.mutations.setToken(token)
// }