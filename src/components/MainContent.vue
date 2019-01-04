<template>
	<v-container grid-list-md text-xs-center>
		<v-layout row wrap>
			<v-flex xs4>
				<v-card dark color="primary">
					<v-card-text class="px-4">
						<v-navigation-drawer>
							<img src="../assets/logo.png" alt>
							<h1>MainContent</h1>
						</v-navigation-drawer>
					</v-card-text>
				</v-card>
				<v-card>
					<router-link to="/Account" class="btn btn-block btn-primary" active-class="active">Account</router-link>
				</v-card>
				<v-card>
					<router-link to="/Budget" class="btn btn-block btn-primary" active-class="active">Budget</router-link>
				</v-card>
			</v-flex>
			<v-flex xs8>
				<v-card  color="secondary">
					<v-card-text class="px-0">
						<div class="col-9 p-2">
							<router-view></router-view>
						
						</div>
					</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	import vtf from "vuetify";
	import Vue from "vue";
	import account from "./Account";
	import budget from "./Budget";
	Vue.use(vtf);
	export default {
		name: "MainContent",
		components: {
			Account: account,
			Budget: budget
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
	font-weight: normal;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
