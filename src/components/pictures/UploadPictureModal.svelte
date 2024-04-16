<!-- Modal.svelte -->
<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let onClose;
</script>

<div class="modal">
  <div class="modal-content">
    <slot></slot>
    <button on:click={onClose}>Close</button>
  </div>
</div>
