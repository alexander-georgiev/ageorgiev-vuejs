<template> 
  <nav class="menu">
    <div class="user-area">
      <router-link to="/dashboard/profile/">Hi, Alex</router-link>
    </div>    
    <ul class="menu-list">
      <li class="m-t-md"><i class="fas fa-home"></i> <router-link to="/dashboard/">Dashboard</router-link></li>
    </ul>
    <p class="menu-label">
      Content
    </p>
    <ul class="menu-list">
      <li><i class="far fa-newspaper"></i> <router-link to="/dashboard/articles/">Articles</router-link></li>
      <li><i class="far fa-file"></i> <router-link to="/dashboard/pages/">Pages</router-link></li>
      <li><i class="far fa-folder"></i> <router-link to="/dashboard/projects/">Projects</router-link></li>
      <li><i class="far fa-comment-alt"></i> <router-link to="/dashboard/projects/">Testimonials</router-link></li>
            <li><i class="far fa-envelope"></i> <router-link to="/dashboard/requests/">Requests</router-link></li>
    </ul> 
    <p class="menu-label">
      Administration
    </p>
    <ul class="menu-list">
      <li><i class="fas fa-cogs"></i> <router-link to="/dashboard/settings/">Settings</router-link></li>
      <li><i class="fas fa-search"></i> <router-link to="/dashboard/settings/seo">SEO</router-link></li>

    </ul>
  </nav>
</template>

<script>
export default {
  name: 'usermenu',
  data () {
    return {
      msg: ''
    }
  }
}
</script>