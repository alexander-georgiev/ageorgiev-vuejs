<template> 
  <nav class="menu">
    <div class="user-area">
      <router-link to="/dashboard/profile/">Hi, Alex</router-link>
    </div>    
    <ul class="menu-list">
      <li><i class="fas fa-home"></i> <router-link to="/dashboard/">Dashboard</router-link></li>
    </ul>
    <p class="menu-label">
      Content
    </p>
    <ul class="menu-list">
      <li><i class="far fa-newspaper"></i> <router-link to="/dashboard/posts/">Posts</router-link></li>
      <li><i class="far fa-folder"></i> <router-link to="/dashboard/projects/">Projects</router-link></li>
      <li><i class="far fa-comment-alt"></i> <router-link to="/dashboard/projects/">Testimonials</router-link></li>
    </ul> 
    <p class="menu-label">
      Administration
    </p>
    <ul class="menu-list">
      <li><i class="fas fa-cogs"></i> <router-link to="/">Settings</router-link></li>
      <li><i class="fas fa-search"></i> <router-link to="/dashboard/projects/">SEO</router-link></li>

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