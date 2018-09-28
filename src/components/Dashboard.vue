<template>
<section class="container section">
	<h1 class="title">Dashboard</h1>
	<div class="columns">        
        <div class="column is-one-third">
          <router-view name="userMenu"></router-view>
        </div>
        
        <div class="column">
           <router-view></router-view>
        </div>
    </div>
</section>
</template>