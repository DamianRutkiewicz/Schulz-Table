<template>
	<div class="table__wrapper">
		<table>
			<tbody>
				<div 
					class="row" 
					v-for="(n, rowIndex) in size"
					:class="{ 'first_row': rowIndex === 0}"
				>
					<div 
						v-for="(k, columnIndex) in size"
						:key="'cell'+rowIndex + columnIndex"
						style="display: inline-block"
					>
						<cell
							:index="rowIndex * size + columnIndex"
							:value="getData(rowIndex * size + columnIndex)"
							:size="size"
							:zoom="zoom"
						/>
					</div>
				</div>
			</tbody>
		</table>
	</div>
</template>
<script>
import Cell from './Cell.vue'
import { wordsDictionary } from '../consts/consts.js'

import { mapGetters, mapMutations } from 'vuex'

	export default {
		data () {
			return {
				cellsData: []
			}
		},
		components: {
			Cell
		},
		props: {
			size: {
				type: [Number, String],
				default: 3
			},
			dataType: {
				type: String,
				default: 'numbers' 
			},
			zoom: {
				type: Number,
				default: 1
			}
		},
		watch: {
			reloading (val) {
				if (val) {
					if (this.dataType === 'numbers') {
						this.numbers()
					} else if (this.dataType === 'words') {
						this.words()
					}
				}
				this.reloadMutation(false)
			},
			dataType (val) {
				if (val === 'numbers') {
					this.numbers()
				} else if (val === 'words') {
					this.words()
				}
			},
			size () {
				if (this.dataType === 'numbers') {
					this.numbers()
				} else if (this.dataType === 'words') {
					this.words()
				}
			}
		},
		mounted () {
			this.numbers()
		},
		computed: {
			...mapGetters([
				'reloading'
			]),
			central () {
				var centr = Math.floor(this.size/2)
				return centr
			}
		},
		methods: {
			...mapMutations([
				'reloadMutation'
			]),
			numbers () {
				var numbersLegth = this.size * this.size
				var numbers = []

				for (let i = 0; i < numbersLegth; i++) {
					numbers[i]=i + 1
				}

				this.cellsData = this.shuffle(numbers)
			},
			words () {
				let result = []
				let length = this.size * this.size
				let temporaryWordsDictionary = wordsDictionary.slice(0)

				for (var i = 0; i < length; i++) {

					let random = Math.floor(Math.random() * wordsDictionary.length - i) + i
					let tmp = temporaryWordsDictionary[i]
					temporaryWordsDictionary[i] = temporaryWordsDictionary[random]
					temporaryWordsDictionary[random] = tmp
					result.push(temporaryWordsDictionary[i])
				}

				this.cellsData = result
			},
			shuffle (o) {
				for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
				return o;
			},
			getData (index) {
				return this.cellsData[index] ? this.cellsData[index].toString() : null
			}
		}
	}
</script>
<style lang="scss" scoped>
	.table__wrapper {
		padding: 3px;
		background-color: rgba(0,0,0,.4);
		border-radius: 8px;
		table {
			border-collapse: collapse;
			margin: 0 auto;
			background-color: #fff;
			.row {
				&.first_row {
					border-top: 3px solid rgba(0,0,0,.4);
				}
				
			}
		}
	}
</style>