<script>
    export let colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33'];
  
    function handleClick(color) {
      alert(You selected color: ${color});
    }
  </script>
  <div>
    {#each colors as color}
      <button on:click={() => handleClick(color)} style="background-color: {color}; color: white; margin: 5px; padding: 10px; border: none; border-radius: 5px;">
        {color}
      </button>
    {/each}
  </div> 
  <style>
    div {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  </style>
  
  