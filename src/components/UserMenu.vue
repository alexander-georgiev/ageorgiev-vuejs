<template> 
  <aside class="menu">
  <p class="menu-label">
    General
  </p>
  <ul class="menu-list">
    <li><router-link to="/dashboard/profile/">Profile</router-link></li>
  </ul>
  <p class="menu-label">
    Administration
  </p>
  <ul class="menu-list">
    <li><router-link to="/dashboard/posts/">Blog Posts</router-link></li>
    <li>
      <a>Manage Your Team</a>
      <ul>
        <li><a>Members</a></li>
        <li><a>Plugins</a></li>
        <li><a>Add a member</a></li>
      </ul>
    </li>
    <li><a>Invitations</a></li>
    <li><a>Cloud Storage Environment Settings</a></li>
    <li><a>Authentication</a></li>
  </ul>  
</aside>

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