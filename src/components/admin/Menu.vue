
<template> 
  <nav class="menu">
    <div class="user-area">
      <router-link to="/admin/profile/">Hi, {{displayName}}</router-link>
    </div>    
    <ul class="menu-list">
      <li class="m-t-md"><IconDashboard class="icon home" /> <router-link to="/admin/">Dashboard</router-link></li>
    </ul>
    <p class="menu-label">
      Content
    </p>
    <ul class="menu-list">
      <li> <IconNewspaper class="icon newspaper" /> <router-link to="/admin/articles/">Articles</router-link></li>
      <li><IconPages class="icon newspaper" /> <router-link to="/admin/pages/">Pages</router-link></li>
      <li><IconProjects class="icon newspaper" /> <router-link to="/admin/projects/">Projects</router-link></li>
      <li><IconTestimonials class="icon newspaper" /> <router-link to="/admin/projects/">Testimonials</router-link></li>
            <li><i class="fal fa-envelope"></i> <router-link to="/admin/requests/">Requests</router-link></li>
    </ul> 
    <p class="menu-label">
      Administration
    </p>
    <ul class="menu-list">
      <li><i class="fas fa-cogs"></i> <router-link to="/admin/settings/">Settings</router-link></li>
      <li><i class="fas fa-search"></i> <router-link to="/admin/settings/seo">SEO</router-link></li>

    </ul>
  </nav>
</template>

<script>
import IconNewspaper from '../../assets/icons/newspaper.svg';
import IconDashboard from '../../assets/icons/home.svg';
import IconPages from '../../assets/icons/file.svg';
import IconProjects from '../../assets/icons/folder.svg';
import IconTestimonials from '../../assets/icons/comment-alt.svg';

export default {
  name: 'usermenu',
  components: {
    IconNewspaper,
    IconDashboard,
    IconPages,
    IconProjects,
    IconTestimonials
  },
  data () {
    return {
      displayName: 'Alex',
    }
  },
  created() {
    // displayName: this.$root.user.displayName
  }
}
</script>