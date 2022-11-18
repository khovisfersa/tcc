import store from '../store'
// import store from '@/store'
import axios from 'axios'

let api = "https://lfstcc.click"

export async function getUserInfo(token) {
	let config = {
		headers: {
			'Content-Type' : 'multipart/form-data',
			'x-access-token' : token
		}
	}
	return await axios.get(api + '/user_info', config)
	// .then((res) => {
	// 	store.commit('setToken', res.data.token)
	// 	store.commit('setUser', res.data.username)
	// 	store.commit('setIsAdmin',res.data.isadmin)
	// 	store.commit('setIsConteudista',res.data.isconteudista)
	// 	store.commit('setUserId', res.data.user_id)
	// 	store.commit('setGrupoId', res.data.grupo_id)

	// })
	// .catch((err) => {
	// 	store.commit('setToken', null )
	// 	store.commit('setUser', null )
	// 	store.commit('setIsAdmin', null )
	// 	store.commit('setIsConteudista', null )
	// 	store.commit('setUserId', null )
	// 	store.commit('setGrupoId', null )

	// 	localStorage.token = null
	// 	console.log(err)
	// })
}

// export async function getUserInfo(token) {
// 	let config = {
// 		headers: {
// 			'Content-Type' : 'multipart/form-data',
// 			'x-access-token' : token
// 		}
// 	}
// 	await axios.get(api + '/user_info', config)
// 	.then((res) => {
// 		store.commit('setToken', res.data.token)
// 		store.commit('setUser', res.data.username)
// 		store.commit('setIsAdmin',res.data.isadmin)
// 		store.commit('setIsConteudista',res.data.isconteudista)
// 		store.commit('setUserId', res.data.user_id)
// 		store.commit('setGrupoId', res.data.grupo_id)

// 	})
// 	.catch((err) => {
// 		store.commit('setToken', null )
// 		store.commit('setUser', null )
// 		store.commit('setIsAdmin', null )
// 		store.commit('setIsConteudista', null )
// 		store.commit('setUserId', null )
// 		store.commit('setGrupoId', null )

// 		localStorage.token = null
// 		console.log(err)
// 	})
// }


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