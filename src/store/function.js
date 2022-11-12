import store from '../store'
import axios from 'axios'

let api = "https://lfstcc.click"

export async function getUserInfo(token) {
	let config = {
		headers: {
			'Content-Type' : 'multipart/form-data',
			'x-access-token' : token
		}
	}
	console.log("getUserInfo")
	console.log(api)
	await axios.get(api + '/user_info', config)
	.then((res) => {
		console.log("res: ")
		console.log(res.data)
		store.commit('setToken', res.data.token)
		store.commit('setUser', res.data.username)
		store.commit('setIsAdmin',res.data.isadmin)
		store.commit('setIsConteudista',res.data.isconteudista)
		store.commit('setUserId', res.data.user_id)
		store.commit('setGrupoId', res.data.grupo_id)
	})
	.catch((err) => {
		console.log(err)
	})
}

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