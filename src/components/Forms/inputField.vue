<template>
       <div class="field">
        <label class="label">Site Title</label>
        <div class="control">
          <input class="input" type="text" placeholder="Title" v-model="data" required>
        </div>
      </div>
</template>
<script>
export default {
    data() {
        return {
	        data: 'asd'
        }
    },
    props: ['data'],
    methods: {
    inputOccurred(e) {
      // set the model
      this.value = e.target.value
      this.$emit('on-change', this.item, this.index)
    }
  }
 }
</script>