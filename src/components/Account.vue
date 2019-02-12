<template>
<v-container>
	<v-layout justify-center xs12>
		<v-flex>
			<v-toolbar>
				<v-toolbar-title v-if="isAdd==true" left>All Account</v-toolbar-title>
				<v-toolbar-title v-else left>Add Account</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-toolbar-items class="hidden-sm-and-down">
					<v-btn v-if="isAdd==true" @click="changeButton" large to="/add-account" flat>Add account +</v-btn>
					<v-btn v-else @click="changeButton" large to="/all-account" flat>all account</v-btn>
				</v-toolbar-items>
			</v-toolbar>
			<v-card class="mx-auto" color="#26c6da" xs12>
				<v-card-title>
					<v-spacer></v-spacer>
				</v-card-title>
				<v-card-text class="headline font-weight-light">
					<transition name="fade" appear>
						<router-view></router-view>
					</transition>
				</v-card-text>
			</v-card>
		</v-flex>
	</v-layout>
	</v-container>
</template>
<script>
	import { mapMutations,mapGetters } from "vuex";
	export default {
		data: function() {
			return {
				isAdd: true
			};
		},
		methods: {
			...mapMutations(['ACCOUNT_STATE_CHANGE']),
			...mapGetters(['GET_ACCOUNT_STATE']),
			changeButton: function() {
				//console.log("function call")
				this.$store.commit('ACCOUNT_STATE_CHANGE');
				console.log("this is add",this.isAdd);
				console.log('this getters before',this.$store.state.IS_ACCOUNT_ADD);
				this.isAdd = this.$store.state.IS_ACCOUNT_ADD;
				
				console.log('this getters',this.$store.state.IS_ACCOUNT_ADD);
				//console.log("after call,isadd:",this.isAdd)
			}
		},
		
		
	};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
