<template>
	<v-layout justify-center xs12>
		<v-flex>
			<v-toolbar color="indigo" dark>
				<v-toolbar-title>
					<h3 class="headline mb-0">Account</h3>
				</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-btn v-if="isAdd==true" @click="changeButton" to="/all-account"  flat>Add account +</v-btn>
				<v-btn v-else @click="changeButton" to="/add-account" flat  >edit account</v-btn>
			</v-toolbar>
			<v-card class="mx-auto" color="#26c6da" xs12>
				<v-card-title>
					<v-icon large left>mdi-twitter</v-icon>
					<span class="title font-weight-light">Twitter</span>
				</v-card-title>
				<v-card-text class="headline font-weight-bold">
					<router-view></router-view>
				</v-card-text>
			</v-card>
		</v-flex>
	</v-layout>
</template>
<script>
	/*
					<v-btn flat v-if="isAdd==true" @click="changeButton" color="orange">Add account +</v-btn>
								<v-btn flat v-else @click="changeButton" color="orange">View all accounts</v-btn>*/
	import { mapActions } from "vuex";
	import Accountform from "./Account-form";
	import Accounttable from "./Account-table";
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
		},

		components: {
			"all-account": Accounttable,
			"add-account": Accountform
		}
	};
</script>
