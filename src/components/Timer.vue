<template>
	<div class="timer__wrapper" @keyup.enter.native="start">
		<div class="timer">
			<span>{{ time | formatTimer }}</span>
		</div>
		<div class="buttons">
			<button 
				class="start-button"
				:disabled="isStartedTimer" 
				@click="start"
			>
				<font-awesome-icon icon="play-circle" />
			</button>
			<button 
				class="stop-button"
				:disabled="!isStartedTimer" 
				@click="stop"
			>
				<font-awesome-icon icon="stop-circle" />
			</button>
			<button 
				class="reload" 
				:disabled="isStartedTimer" 
				@click="reload"
			>
				<font-awesome-icon icon="sync-alt" />
			</button>
		</div>
	</div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
	export default {
		data () {
			return {
				time: 0,
				runTimer: false,
				interval: null
			}
		},
		filters: {
			formatTimer (val) {
				let minutes = Math.floor(parseInt(val) / 60)
				let seconds = parseInt(val) % 60

				if (minutes < 10) minutes = `0${minutes}`
				if (seconds < 10) seconds = `0${seconds}`

				return `${minutes}:${seconds}`
			}
		},
		mounted () {
			let self = this
			window.addEventListener('keyup', function (event) {
				if (event.keyCode === 32 && !self.isStartedTimer) {
					self.start()
				} else if (event.keyCode === 32 && self.isStartedTimer) {
					self.stop()
				}
			})
		},
		computed: {
			...mapGetters([
				'isStartedTimer'
			])
		},
		methods: {
			...mapMutations([
				'startTimerMutation',
				'stopTimerMutation',
				'reloadMutation'
			]),
			start () {
				this.startTimerMutation()
				this.startTimer()
			},
			stop () {
				this.stopTimerMutation()
				clearInterval(this.interval)
			},
			startTimer () {
				this.interval = setInterval(() => {
					this.time++
				}, 1000)
			},
			reload () {
				this.reloadMutation(true)
			}
		}
	}

</script>
<style lang="scss" scoped>
	.timer__wrapper {
		display: flex;
		align-items: center;
		padding: 30px;
		width: 100%;
		max-width: 400px;
		justify-content: space-between;

		.timer {
			span {
				font-size: 30px;
				font-weight: bold;
			}
		}
		.buttons {
			display: flex;
			justify-content: space-around;

			button {
				width: 50px;
				height: 50px;
				background-color: none;
				border: 2px solid rgba(0,0,0,.5);
				border-radius: 100%;
				margin: 0 10px;
				cursor: pointer;
				outline: none;
				transition: border .3s linear;

				&:hover {
					& {
						border: 2px solid #6C40FF;
					}
				}

				svg {
					font-size: 22px;
				}
			}
		}
	}
</style>