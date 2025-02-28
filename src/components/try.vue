<template>
	<div>{{ arr }}</div>
	<button @click="arr.push(22)">change</button>
	<button @click="arr = []">alter</button>
	<div>{{ obj }}</div>
	<button @click="obj.a.a++">change</button>

	<button @click="arr = []">alter</button>
	<div>{{ obj2 }}</div>
	<button @click="fn()">change</button>
	<div>{{ x }}</div>
	<div>{{ y }}</div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';

import myHook from './hook';
import myHook2 from './hook2';
let { obj: obj2, increase: fn } = myHook();
let { x, y } = myHook2();
let arr = ref([1, 2, 3]);
let obj = ref({
	a: {
		a: 1,
	},
	b: 2,
});
watch(
	arr,
	() => {
		console.log('watch');
		console.log(x.value);
	},
	{
		deep: true,
	},
);
watch(
	() => obj.value.a,
	() => {
		console.log('watch obj');
	},
	{},
);
</script>
<style scoped></style>
