import axios from "axios";
// import { stat } from "fs";
const state = {
    list: []
}

const getters = {
    data(state) {
        return state.list
    }
}
const mutations = {
    getList(state, data) {
        state.list = data
    },
    addList(state, data) {
        state.list.unshift(data)
    },
    newList(state, id) {
        console.log(id)
        state.list = state.list.filter(item => item.id != id)
    },
    putList(state, obj) {
        let index = state.list.findIndex(item => item.id == obj.id)
        state.list[index].completed = !state.list[index].completed
    },
    spliceList(state, data) {
        // console.log(data)
        state.list = data
    }
}

const actions = {
    getJson({ commit }) {
        axios.get("http://jsonplaceholder.typicode.com/todos").then(res => {
            // console.log(res.data)
            commit("getList", res.data)

        })
    },
    addJson({ commit }, obj) {
        axios.post("http://jsonplaceholder.typicode.com/todos", obj).then(res => {
            console.log(res.data)
            commit("addList", res.data)

        })
    },
    delJson({ commit }, id) {
        axios.delete("http://jsonplaceholder.typicode.com/todos/" + id).then(res => {
            console.log(res.data)
            commit("newList", id)

        })
    },
    putJson({ commit }, obj) {
        axios.put("http://jsonplaceholder.typicode.com/todos/" + obj.id, obj).then(res => {

            // console.log(obj)
            commit("putList", obj)

        })
    },
    spliceJson({ commit }, id) {
        axios.get(`http://jsonplaceholder.typicode.com/todos?_limit=${id}`).then(res => {
            commit("spliceList", res.data)




        })
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}