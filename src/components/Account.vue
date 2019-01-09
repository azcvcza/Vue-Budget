<template>
	<v-layout justify-center xs12>
		<v-flex>
			<v-toolbar dark class="indigo">
				<v-toolbar-title v-if="isAdd==true" left>All Account</v-toolbar-title>
				<v-toolbar-title v-else left>Edit Account</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-toolbar-items class="hidden-sm-and-down">
					<v-btn v-if="isAdd==true" @click="changeButton" large to="/add-account" flat>Add account +</v-btn>
					<v-btn v-else @click="changeButton" large to="/all-account" flat>edit account</v-btn>
				</v-toolbar-items>
			</v-toolbar>
			<v-card class="mx-auto" color="#26c6da" xs12>
				<v-card-title>
					<v-spacer></v-spacer>
				</v-card-title>
				<v-card-text class="headline font-weight-light">
					<transition name="fade">
						<router-view></router-view>
					</transition>
				</v-card-text>
			</v-card>
		</v-flex>
	</v-layout>
</template>
<script>
	import { mapActions } from "vuex";
	export default {
		data: function() {
			return {
				isAdd: true
			};
		},
		methods: {
			changeButton: function() {
				//console.log("function call")
				if (this.isAdd == true) {
					this.isAdd = false;
				} else {
					this.isAdd = true;
				}
				//console.log("after call,isadd:",this.isAdd)
			}
		}
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
