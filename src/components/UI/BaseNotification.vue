<template>
  <div>
    <teleport to="body">
      <div class="modal error">Error</div>
    </teleport>
  </div>
</template>

<script>
export default {
  props: ["status", "message"],
};
</script>

<style scoped>
.modal {
  position: absolute;
  top: 10px;
  right: 10px;
}
.confirm {
  background-color: rgb(3, 134, 3);
}
.warning {
  background-color: rgb(173, 127, 1);
}
.error {
  background-color: rgb(167, 3, 3);
}
@media (max-width: 700px) {
  .modal {
    top: 10px;
    right: 10px;
  }
}
</style>
