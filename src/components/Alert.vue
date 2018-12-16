<template id="Alert">
<div>
	<div class="overlay" v-show="alert.show"></div>
	<div class="alert">
		<div class="notification" v-bind:class="[alert.status]" v-show="alert.show">
		  <button class="delete" @click="close" ></button>
		  <h5 class="title">{{alert.title}}</h5>
		  <p>{{alert.msg}}</p>
		</div>
	</div>
</div>
</template>
<script>
	export default {
	  props: {
	    alert: {
	    	title: '',
	    	msg: '',
	    	status: 'is-primary',
	    	show: '',
	    }
	  }, 
		methods: {
        	close: function () {
            	this.alert.show = false;
        	}
    	},
    	mounted: function () {
		    document.addEventListener("keydown", (e) => {
		      if (this.show && e.keyCode == 27) {
		        this.close();
		      }
		    });
  		}
	}
</script>