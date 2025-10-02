<script lang="ts">
    import type { Ring } from '$lib/types/ring';

    /* Defines the expected props for the RingCard component to match the Ring Type,
    in this case the component must receive one prop named ring, and it must be of type Ring */

    interface Props {    
        ring: Ring;
    }

    /* Svelte 5 Equivalent to "export let ring: Ring;"" on svelte 4
    destructures the ring prop so that ring can be use directly instead of props.ring.
    $props() gives you the actual props passed to the component.
    */
    let {ring}: Props = $props();   
</script>

<div class= "ring-card bg-white rounded-lg shadow-md">
    <img 
        src = {ring.media.gold}
        alt = {ring.name}
        class="w-full h-48 object-cover"
    />
    <div class="p-4">
        <h3 class= "text-lg font-semibold">{ring.name}</h3>
        <p class= "text-gray-600 text-sm">{ring.description}</p>
        <p class= "text-xl font-bold text-blue-600">{ring.basePrice}</p>
        <div>
            {#each ring.metals as metal}
            <span class ="px-2 py-1 bg-gray-200 rounded text-xs">{metal}</span>
            {/each}
        </div>
    </div>
</div>