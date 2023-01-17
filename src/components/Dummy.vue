<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
      color="primary"
      filled
      clearable
      data-test="form-top"
    >
    </q-form>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DummyComponent',
  inheritAttrs: true,
};
</script>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';

const $q = useQuasar();
const emit = defineEmits(['myevent']);

const confirm = ref(true);

async function onSubmit() {
  if (confirm.value !== true) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      position: 'top',
      message: 'Confirm data',
    });
  } else {
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      position: 'top',
      message: 'Data added',
    });

    doAction();
  }
}

function onReset() {
  confirm.value = false;
}

function doAction() {
  console.log('*** doAction called');
  emit('myevent', 'hello');
}
</script>
