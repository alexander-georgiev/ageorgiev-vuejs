<template>
	<div class="overlay" v-if="$root.loading === true">
		<div class="loading lds-ripple">
			<div></div><div></div>
		</div>
	</div>
</template>
