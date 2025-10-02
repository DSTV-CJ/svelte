export interface Ring {
    id: string;
    name: string;
    basePrice: number;
    description: string;
    media: {
        color: string | null;
        gold: string;
        silver: string | null;
    };
    metals: string[];
    supportHalo: boolean;
    supportSideStones: boolean;
    category: string;
    Stones: {
        Center: {
            Gem: string;
            Price: number;
        };
        Side: {
            Gem: string;
            Price: number;
        } | null;
    };
    caratRange: string;
}

export interface RingFilters {
    metal: string;
    price: number;
    category: string;
    gem: string;
    sideStones: boolean;
    halo: boolean;
    search: string;
}