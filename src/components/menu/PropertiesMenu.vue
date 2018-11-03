<template>
	<div class="properties__wrapper">
		<div 
			class="hamburger"
			:class="{ 'clicked': menuShow }"
			@click="menuShow = !menuShow"
		>
			<div class="hamburger__line"></div>
			<div class="hamburger__line"></div>
			<div class="hamburger__line"></div>
		</div>
		<ul class="menu">
			<template
				v-for="(item, index) in menuData"
			>
				<menu-item 
					:show="menuShow"
					:index="index"
					:icon="menuIcons[index]"
					:sizeBox="index === 0"
					:dataBox="index === 1"
					:zoomBox="index === 2"
					@incrementSize="$emit('incrementSize', $event)"
		      @decrementSize="$emit('decrementSize', $event)"
		      @selectData="$emit('selectData', $event)"
		      @incrementZoom="$emit('incrementZoom', $event)"
		      @decrementZoom="$emit('decrementZoom', $event)"
				/>
			</template>
		</ul>
	</div>
</template>
<script>
import MenuItem from './MenuItem.vue'

	export default {
		props: {	

		},
		components: {
			MenuItem
		},
		data () {
			return {
				hover: false,
				menuShow: false,
				menuData: [
					'item 1',
					'item 2',
					'item 3'
				],
				menuIcons: [
					'crop-alt',
					'edit',
					'search-plus'
				]
			}
		}
	}
</script>
<style lang="scss" scoped>
	.properties__wrapper {
		position: absolute;
		width: 160px;
		left: 0;
		top: 0;

		.hamburger {
			position: relative;
			width: 50px;
			height: 50px;
			left: 50%;
			transform: translateX(-50%);
			top: 30px;
			cursor: pointer;

			&.clicked {	
				.hamburger__line {
					transform: translateY(-50%) rotate(-45deg);
					top: 50%;
				}

				.hamburger__line:nth-child(1) {
					opacity: 0;
				}

				.hamburger__line:nth-child(2) {
					transform: translateY(-50%) rotate(45deg);
					top: 50%;
				}
			}

			.hamburger__line {
				position: absolute;
				width: 50px;
				height: 12px;
				background-color: #000;
				top: 0;
				left: 0;
				transition: all .5s ease-in-out;

				&:nth-child(1) {
					top: 50%;
					transform: translateY(-50%);
				}

				&:nth-child(2) {
					bottom: 0;
					top: auto;
				}
			}
		}
		.menu {
			list-style: none;
			padding-left: 0;
			padding-top: 100px;
		}
	}
</style>