<template>
	<div>
		<CommonGnb/>
		<nuxt />
	</div>
</template>

<script>
import CommonGnb from '@/components/common_gnb.vue';
export default {
	name: 'DefaultLayout',

	components:{CommonGnb},

	data() {
		return {
      
    	}
	},
}
</script>
