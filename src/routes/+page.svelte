<script lang="ts">
    import RingCard from "$lib/components/ui/RingCard.svelte"
    import ringsData from "../data/rings.json"
    import type {Ring} from '$lib/types/ring.ts'

    const rings: Ring[] = ringsData;

</script>

<div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Cullen Rings Collection</h1>
    <div>
        {#each rings as ring}
        <!-- Remember ring={ring} is equal to just {ring} because prop share same name as variable -->
        <RingCard ring={ring} /> 
            {/each}
    </div>
</div>