import { fetchNews, fetchJobs, fetchAsk, fetchUserInfo, fetchItem, fetchList } from '../api/index'

export default {
    FETCH_NEWS({ commit }) {
        fetchNews()
            .then(res => {
                commit('SET_NEWS', res.data)
                return res;
            })
            .catch(err => console.log(err))
    },
    FETCH_JOBS({ commit }) {
        fetchJobs()
            .then(res => {
                commit('SET_JOBS', res.data)
                return res;
            })
            .catch(err => console.log(err))
    },
    FETCH_ASKS({ commit }) {
        fetchAsk()
            .then(res => {
                commit('SET_ASKS', res.data)
                return res;
            })
            .catch(function (err) {
                console.log(err)
            })
    },
    FETCH_USER({ commit }, userName) {
        fetchUserInfo(userName)
            .then(res => {
                commit('SET_USER', res.data)
            }).catch(function (err) {
            console.log(err)
        })
    },
    FETCH_ITEM({ commit }, id) {
        fetchItem(id)
            .then(res => {
                commit('SET_ITEM', res.data)
            }).catch(function (err) {
            console.log(err)
        })
    },
    FETCH_LIST({ commit }, pageName) {
      fetchList(pageName)
        .then(res => {
          commit('SET_LIST', res.data)
        })
        .catch(error => {
          console.log(error)
        })

    },
}
