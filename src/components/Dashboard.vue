<template>
	<div class="columns dashboard-wrapper">        
        <aside class="column is-one-fifth closedd" id="sidebar">
        	<div class="logo p-t-md p-b-md">
        		<router-link to="/"><i class="fab fa-2x fa-autoprefixer"></i></router-link>
        	</div>          
          <UserSettingsNav/>
        </aside>
        
        <section class="column main-content">
           <router-view></router-view>
        </section>
    </div>

</template>
<script>
import UserSettingsNav from '../components/UserMenu'
export default {
  name: 'Dashboard',
  components: { UserSettingsNav },
  data () {
    return {
         user: {},
         name: '',
         selectedFile: null
    }
  },
}
</script>