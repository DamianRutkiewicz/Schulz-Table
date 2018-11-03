import Vue from 'vue';
import DataType from '../consts/consts.js'

export const incrementSizeMutation = state => {
	if (state.tableSize <= 9) {
		Vue.set(state, 'tableSize', state.tableSize + 2)
	} 
}
export const decrementSizeMutation = state => {
	if (state.tableSize >=5) {
		Vue.set(state, 'tableSize', state.tableSize - 2)
	}
}
export const incrementZoomMutation = state => {
	if (state.zoom <= 1.5) {
		Vue.set(state, 'zoom', state.zoom + 0.1)
	}
}
export const decrementZoomMutation = state => {
	if (state.zoom >= .6) {
		Vue.set(state, 'zoom', state.zoom - 0.1)
	}
}
export const selectDataMutation = (state, name) => {
	// if statement
	Vue.set(state, 'dataType', name)
}

export const startTimerMutation = state => {
	Vue.set(state, 'startedTimer', true)
}

export const stopTimerMutation = state => {
	Vue.set(state, 'startedTimer', false)
}

export const reloadMutation = (state, val) => {
	Vue.set(state, 'reload', val)
}