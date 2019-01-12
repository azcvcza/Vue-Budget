<template>
	<v-card>
		<v-container fluid grid-list-xl>
			<v-form ref="form" v-model="valid" lazy-validation>
				<v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
				<v-select :items="items" label="Category" placeholder="category"></v-select>
				<v-text-field xs6 v-model="balance" :rules="balanceRules" label="Balance" required clearable></v-text-field>
				<v-btn :disabled="!valid" @click="validate">Validate</v-btn>
				<v-btn @click="reset">Reset Form</v-btn>
			</v-form>
		</v-container>
	</v-card>
</template>
<script>
	export default {
		data: () => ({
			valid: true,
			name: "",
			nameRules: [
				v => !!v || "Name is required",
				v => (v && v.length <= 10) || "Name must be less than 10 characters"
			],
			balance: 0,
			balanceRules: [
				v => !!v || "balance is required",
				v =>
					/^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/.test(v) ||
					"balance must be valid"
			],
			select: null,
			items: ["Credit Card", "Checking", "Balance"],
			checkbox: false
		}),

		methods: {
			validate() {
				if (this.$refs.form.validate()) {
					this.snackbar = true;
				}
			},
			reset() {
				this.$refs.form.reset();
			}
		}
	};
</script>
