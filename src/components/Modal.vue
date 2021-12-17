<template>
  <div class="modal">
    <div class="modal-container">
      <h3>Are you sure that you want to delete this project?</h3>
      <button @click="ModalClickYes" class="btn-confirm">Yes</button>
      <button @click="closeModal" class="btn-confirm">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    ModalClickYes() {
      this.$emit('ModalClickYes')
    },
  },
}
</script>


<style>
.modal {
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(222 214 214 / 40%);
  backdrop-filter: blur(10px);
}

.modal-container {
  border: 4px solid #00ce89;
  padding: 2rem 3rem 2rem 3rem;
  max-width: 400px;
  margin: 2rem auto 4rem auto;
  background-color: rgb(255, 248, 248);
}

.btn-confirm {
  color: 000;
  font-family: inherit;
  background: none;
  border: none;
  margin: 1rem 2rem 1rem 0;
  border-bottom: 1px solid #000;
  cursor: pointer;
  font-weight: bold;
}
</style>