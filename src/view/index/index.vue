<template>
	<div>
		欢迎来到人员管理系统
		<footer-nav v-bind:class="{'isIndex': isNowPage}"></footer-nav> <!-- 使用组件：注意驼峰法命名的组件名FooterNav在使用时用短横线连接footer-nav -->
	</div>
</template>

<script>
	import FooterNav from '../../components/footer.vue' //引入组件FooterNav
	export default{  //局部注册组件，写在export default内部 
		components: {
			FooterNav
		},
		data() {
			return {
				isNowPage: true
			}
		}
	}
</script>
