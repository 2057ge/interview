import { reactive } from 'vue';
function myHook() {
	let obj = reactive({
		a: 2,
		c: 3,
	});
	function increase() {
		obj.a++;
	}
	return {
		obj,
		increase,
	};
}
export default myHook;
