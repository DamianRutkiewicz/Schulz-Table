<template>
	<li
		class="menu__item"
		:class="{ show }"
		:style="{ 'transition-delay': delay }"
	>
		<div class="icon__side">
			<font-awesome-icon :icon="icon" />
		</div>
		<div class="buttons__side">
			<template v-if="sizeBox || zoomBox">
				<button
					@click="decrement"
				>
					<font-awesome-icon icon="minus" />
				</button>
				<button
					@click="increment"
				>
					<font-awesome-icon icon="plus" />
				</button>
			</template>
			<template v-else-if="dataBox">
				<button
					@click="selectWords"
				>
					W
				</button>
				<button
					@click="selectNumbers"
				>
					N
				</button>
			</template>

		</div>
	</li>
</template>
<script>
import { mapMutations } from 'vuex'

	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			},
			icon: {
				type: String,
				default: 'stop-circle'
			},
			index: {
				type: Number,
				default: 0
			},
			sizeBox: {
				type: Boolean,
				default: false
			},
			dataBox: {
				type: Boolean,
				default: false
			},
			zoomBox: {
				type: Boolean,
				default: false
			}
		},
		data () {
			return {

			}
		},
		computed: {
			delay () {
				let result = this.index * 200
				return `${result}ms`
			}
		},
		methods: {
			...mapMutations([
				'reloadMutation'
			]),
			increment () {
				if (this.sizeBox) {
					this.$emit('incrementSize')
				} else {
					this.$emit('incrementZoom')
				}
			},
			decrement () {
				if (this.sizeBox) {
					this.$emit('decrementSize')
				} else {
					this.$emit('decrementZoom')
				}
			},
			selectWords () {
				setTimeout(() => this.$emit('selectData', 'words'), 500)
				this.reloadMutation(true)
			},
			selectNumbers () {
				setTimeout(() => this.$emit('selectData', 'numbers'), 500)
				this.reloadMutation(true)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.menu__item {
		height: 45px;
		width: 180px;
		margin-bottom: 2px;
		position: relative;
		overflow: hidden;
		background-color: #000;
		color: #fff;
		line-height: 45px;
		transition: translate .5s ease-in-out;
		transform: translateX(-100%);
		transition: all .5s ease-in-out;
		display: flex;

		&.show {
			transform: translateX(0);
		}

		&:after {
			content : '';
			position: absolute;
			width: 45px;
			height: 45px;
			background-color: #fff;

			right: 0;
			transform: rotate(-45deg) translate(50%, 50%);
			z-index: 100;
		}

		.icon__side {
			flex: 0 0 40px;
		}

		.buttons__side {
			flex: 1 1 auto;
			display: flex;
			align-items: center;
			justify-content: center;

			button {
				background: none;
				width: 30px;
				height: 30px;
				border: 2px solid #fff;
				border-radius: 50%;
				margin-right: 10px;
				cursor: pointer;
				color: #fff;
				outline: none;

				svg {
					color: #fff;
				}
			}
		}
	}

</style>