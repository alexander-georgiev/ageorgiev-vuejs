<template>
  <div class="field">
    <label class="label" :label="label">{{ label }}</label>
    <div class="control">
      <input class="input" :type="fieldType" @input="inputOccurred" />
    </div>
  </div>
</template>
<script>
// import { mapActions } from 'vuex';

export default {
  name: 'InputField',
  props: {
    fieldType: String,
    targetFieldPath: String,
    label: String,
  },
  computed: {
    // getFieldValue() {
    //   const targetFieldPathList = this.targetFieldPath.split('.');
    //   let currentProp = this.$store.state.forms;

    //   targetFieldPathList.forEach((pathNode) => {
    //     currentProp = currentProp[pathNode];
    //   });

    //   return currentProp;
    // }
  },
  methods: {
    inputOccurred(e) {
      // set the model
      this.value = e.target.value
      this.$emit('on-change', 100);
    }
    // ...mapActions([
    //   'setFormFieldValue'
    // ]),
    // onFormFieldValueChange(event) {
    //   // validation can also be added here
    //   this.setFormFieldValue({
    //     targetFieldPath: this.targetFieldPath,
    //     value: event.target.value
    //   });
    // }
  },
  mutations: {
    // unified way to set properties in 'state.forms' Observer object
    // setFormFieldValue(state, { targetFieldPath, value }) {
    //   const targetFieldPathList = targetFieldPath.split('.');
    //   const targetFieldPathIndex = targetFieldPathList.length - 1;
    //   let currentProp = state.forms;

    //   // traversing Observer object properties until we get to the target property parent
    //   for (let pathNodeIndex = 0; pathNodeIndex < targetFieldPathIndex; pathNodeIndex++) {
    //     currentProp = currentProp[targetFieldPathList[pathNodeIndex]];
    //   }

    //   currentProp[targetFieldPathList[targetFieldPathIndex]] = value;
    // }
  },
  actions: {
    // setFormFieldValue({ commit }, { targetFieldPath, value }) {
    //   commit('setFormFieldValue', { targetFieldPath, value });
    // }
  }
}

</script>
