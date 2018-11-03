<template>
	<div 
		class="cell"
		:class="{ 
			'first_column': index%size === 0,
			'central-point': isCentral,
			'animated': animated
		}"
		:style="{
			'width': zoom * basicWidth
		}"
		transition="list"
	>
		<div 
			class="cell__inner"
			:style="{
				'width': zoom * basicWidth + 'px',
				'height': zoom * basicHeight + 'px',
				'font-size': zoom * basicFontSize + 'px'
			}"
		>
			{{ value }}
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				animated: false,
				basicWidth: 50,
				basicHeight: 50,
				basicFontSize: 16
			}
		},
		props: {
			index: {
				type: Number,
				default: null
			},
			value: {
				type: String, 
				default: null
			},
			size: {
				type: Number,
				default: 3
			},
			zoom: {
				type: Number,
				default: 1
			}
		},
		mounted () {
			setTimeout (() => {
				this.animated = true
			}, (this.index + 1)%(this.size - 1) * 150)
		},
		computed: {
			isCentral () {
				return this.index === Math.floor((this.size * this.size)/2)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.cell {
		border: 3px solid rgba(0,0,0,.4);
		display: inline-block;
		border-left: none;
		border-top: none;
		opacity: 0;
		position: relative;
		background-color: #fff;
		box-sizing: border-box;

		&::after {
			width: 30px;
			height: 20px;
			background-color: gray;
			position: absolute;
			left: 0;
		}

		&.first_column {
			border-left: 3px solid rgba(0,0,0,.4);
		}
		&.central-point {
			background-color: gray;
		}

		&.animated {
			animation: cell 1s ease-in-out;
			opacity: 1;
		}
		.cell__inner {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	.list-enter-active, .list-leave-active {
	  transition: all 1s;
	}
	.list-enter, .list-leave-to {
	  opacity: 0;
	  transform: translateY(30px);
	}

	@keyframes cell {
		0% {
			transform: scale(0);
		}
		90% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}
</style>