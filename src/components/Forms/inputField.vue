<template>
  <div class="field">
    <label class="label" :label="label">{{ label }}</label>
    <div class="control">      
      <input v-if="['text', 'number', 'password', 'email', 'date'].indexOf(fieldType) > -1" class="input" :type="fieldType" :fieldKey="fieldKey" v-model="fieldValue" @input="inputOccurred" />
      <textarea v-if="fieldType == 'textarea'" class="textarea" :fieldKey="fieldKey" v-model="fieldValue" @input="inputOccurred" rows="4" cols="4" />
      <select v-if="fieldType == 'select'" class="select">
        <option v-for="option in fieldValue" :value="option.value">{{option.name}}</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InputField',
  props: {
    label: String,
    fieldType: String,
    fieldKey: String,
    fieldValue: String | Object,    
  },
  methods: {
    inputOccurred(e) {      
      this.$emit('on-change', {
        propKey: this.fieldKey,
        propValue: e.target.value,
      });
    }
  },
}
</script>