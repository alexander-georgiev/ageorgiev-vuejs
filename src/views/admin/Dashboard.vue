<template>
	<div class="columns dashboard-wrapper">        
        <aside class="column is-one-fifth closedd" id="sidebar">
        	<div class="logo p-t-md p-b-md">
        		<router-link to="/"><svg id="logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><title>Alexander Georgiev</title><path class="cls-1" d="M129,111.88l-20.68-67.4a5.72,5.72,0,0,0-5.41-4,5.07,5.07,0,0,0-5.13,4L35.89,244.27A3.56,3.56,0,0,0,35.6,246c0,2.85,2.57,4.56,5.14,4.56a5.12,5.12,0,0,0,5.13-3.71l14.25-46.74,3.13-10.26L102.86,62.17h0l16.3,53.31C122.43,114.26,125.65,113,129,111.88Z"/><path class="cls-1" d="M266.57,139.44H215.84a5.14,5.14,0,0,0,0,10.26h45.31v42.18c0,33.06-17.1,48.45-45.6,48.45s-45.31-15.39-45.31-48.45V99.25c0-33.06,16.81-48.45,45.31-48.45,25.08,0,42.18,11.68,45.6,37.33.29,3.42,2.57,5.14,5.13,5.14s5.13-1.72,5.13-5.71c0-26.22-20.8-47-55.86-47-31.35,0-55.57,16-55.57,58.71v92.63c0,42.75,24.22,58.71,55.57,58.71s55.86-16,55.86-58.71v-47C271.41,142,269.7,139.44,266.57,139.44Z"/><rect class="cls-1" x="95.75" y="139.44" width="130.92" height="10.26" rx="5.13" ry="5.13"/><path class="cls-1" d="M127.93,108.47a60.1,60.1,0,0,1-10.3,1.92l3,9.68a5.25,5.25,0,0,0,6.51,3.42,5.14,5.14,0,0,0,3.47-6.4Z"/></svg></router-link>
        	</div>          
          <AdminMenu/>
        </aside>
        
        <section class="column main-content">
          <div v-if="$route.name == 'Dashboard'" class="section">
            <h1 class="title">Dashboard</h1>
            Welcome to your dashboard!
          </div>

           <router-view></router-view>
        </section>
    </div>

</template>
<script>
import AdminMenu from '../../components/admin/Menu'
export default {
  name: 'Dashboard',
  components: { AdminMenu },
  data () {
    return {
         name: '',
         selectedFile: null
    }
  },
}
</script>