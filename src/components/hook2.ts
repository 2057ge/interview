import { toRefs, reactive, onMounted, onUnmounted } from 'vue';
function useMouse() {
	const state = reactive({ x: 0, y: 0 });
	const update = (e: any) => {
		state.x = e.pageX;
		state.y = e.pageY;
	};
	onMounted(() => {
		window.addEventListener('mousemove', update);
	});
	onUnmounted(() => {
		window.removeEventListener('mousemove', update);
	});
	return { ...toRefs(state) };
}
export default useMouse;
