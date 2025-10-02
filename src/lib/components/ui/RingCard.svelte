<script lang="ts">
    import type { Ring } from '$lib/types/ring';

    /* Defines the expected props for the RingCard component to match the Ring Type,
    in this case the component must receive one prop named ring, and it must be of type Ring */

    interface Props {    
        ring: Ring;
    }

    /* Svelte 5 Equivalent to "export let ring: Ring;"" on svelte 4
    destructures the ring prop so that ring can be use directly instead of props.ring.
    $props() gives me acces to the actual props passed to the component.
    */
    let {ring}: Props = $props();  
    
    function mediaType(url: string) {
        if (!url) return 'no media found';
        
        const videoExtensions = [".mov", ".mp4", ".avi"];
        const imageExtensions = [".png", ".jpg", ".gif"];
        
        // Fixed parentheses placement
        if (imageExtensions.some(ext => url.toLowerCase().endsWith(ext))) {
            return 'img';
        }
        else if (videoExtensions.some(ext => url.toLowerCase().endsWith(ext))) {
            return 'vid';
        }
        else {
            return 'no media found';
        }
    }
</script>

<div class= "ring-card bg-white rounded-lg shadow-md overflow-hidden">
    {#if mediaType(ring.media.gold) == 'img'}
        <img 
            src = {ring.media.gold}
            alt = {ring.name}
            class="w-full h-48 object-cover"
        />
        {:else if mediaType(ring.media.gold) == 'vid'}
        <video 
            src={ring.media.gold}
            class="w-full h-48 object-cover"
            autoplay
            muted
            loop
        ></video>
        {:else}
        <div class="w-full h-48 bg-gray-200 flex items-center justify-center">
            <span class="text-gray-500">No media available</span>
        </div>
    {/if}

    <div class="p-4">
        <h3 class= "text-lg font-semibold">{ring.name}</h3>
        <p class= "text-gray-600 text-sm">{ring.description}</p>
        <p class= "text-xl font-bold text-blue-600">${ring.basePrice}</p>
        <div>
            {#each ring.metals as metal}
            <span class ="px-3 py-1 mx-1 bg-gray-200 rounded text-xs">{metal}</span>
            {/each}
        </div>
    </div>
</div>