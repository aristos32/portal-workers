<template>
  <div class="alert-box">
    <strong>This is an Error Message</strong>
    <slot></slot>
  </div>
</template>

<style scoped>
.alert-box {
  background-color: red;
  color: white;
  padding: 20px;
}
</style>
