<template>
	<v-container grid-list-md text-xs-center>
		<v-layout row wrap>
			<v-flex xs4>
				<v-card dark>
					<v-card-text>
						<h1>MainContent</h1>
						<img src="../assets/logo.png">
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
				<v-card color="secondary">
					<v-card-text class="px-0">
						<div class="col-9 p-2">
							<transition name="bounce" appear>
								<router-view></router-view>
							</transition>
						</div>
					</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	import account from "./Account";
	import budget from "./Budget";

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
.bounce-enter-active {
	animation: bounce-in 0.5s;
}
.bounce-leave-active {
	animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1.5);
	}
	100% {
		transform: scale(1);
	}
}
</style>
