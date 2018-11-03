<template>
  <div class="home">
  	<div class="title">
  		<h1>Schulz Table</h1>
  	</div>
    <properties-menu
      @incrementSize="incrementSizeMutation"
      @decrementSize="decrementSizeMutation"
      @selectData="selectData"
      @incrementZoom="incrementZoomMutation"
      @decrementZoom="decrementZoomMutation"
    />
    <div class="content">
    	<schulz-table
    		:size="getSize"
    		:dataType="getDataType"
    		:zoom="getZoom"
    	/>
    	<timer/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SchulzTable from '@/components/SchulzTable.vue'
import PropertiesMenu from '@/components/menu/PropertiesMenu.vue'
import Timer from '@/components/Timer.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'home',
  data () {
  	return {

  	}
  },
  components: {
  	SchulzTable,
    PropertiesMenu,
  	Timer,
    FontAwesomeIcon
  },
  computed: {
  	...mapGetters([
  		'getSize',
  		'getDataType',
  		'getZoom'
  	])
  },
  methods: {
  	...mapMutations([
  		'incrementSizeMutation',
  		'decrementSizeMutation',
  		'incrementZoomMutation',
  		'decrementZoomMutation',
  		'selectDataMutation'
  	]),
  	selectData (name) {
  		this.selectDataMutation(name)
  	}
  }
}
</script>
<style lang="scss">
	.home {
		box-sizing: border-box;
		height: 100vh;
		width: calc(100vw - 12px);
		position: relative;
		overflow-x: hidden;

		.title {
			padding: 30px 0;
			h1 {
				margin: 10px;
			}
		}

		.content {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
	}
</style>
