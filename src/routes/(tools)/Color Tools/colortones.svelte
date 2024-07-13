<script>
    import { onMount } from 'svelte';
  
    let colors = [];
  
    onMount(async () => {
      const response = await fetch('/api/colors');
      colors = await response.json();
    });
  </script>
  
  <style>
    .color-box {
      width: 100px;
      height: 100px;
      margin: 10px;
      display: inline-block;
    }
  </style>
  
  <div>
    {#each colors as color}
      <div class="color-box" style="background-color: {color};"></div>
    {/each}
  </div>
  