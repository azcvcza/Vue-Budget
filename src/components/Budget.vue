<template>
	
	<div>
	<span>Budget</span>
	<v-btn v-if="isAdd==true" @click="changeButton" style="background-color:lightgreen">Add Budget +</v-btn>
	<v-btn v-else @click="changeButton" style="background-color:lightblue">View all Budgets</v-btn>
</div>
</template>
<script>

import { mapActions } from "vuex";
export default {
	 data: function() {
        return {
					isAdd:true,
				}
    },
	methods:{
		changeButton:function(){
			//console.log("function call")
			if(this.isAdd == true){
				this.isAdd = false;
			}else{
					this.isAdd = true;
			}
		
			//console.log("after call,isadd:",this.isAdd)
		}
	}
}
</script>