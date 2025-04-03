import { NamedUrl } from "./named-url.model";

export interface EvolutionChainSummary {
    id: number;
    name: string;
}

export interface EvolutionChain {
    chain: Chain;
}

export interface Chain {
    evolution_details: Array<any>;
    is_baby: boolean;
    evolves_to: Chain[];
    species: NamedUrl;
}
