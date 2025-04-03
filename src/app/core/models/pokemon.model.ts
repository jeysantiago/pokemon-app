import { Ability } from "./abilities.model";
import { EvolutionChainSummary } from "./evolution-chain.model";
import { NamedUrl } from "./named-url.model";
import { Species } from "./species.model";
import { Stat } from "./stat.model";
import { Type } from "./type.model";

export interface Pokemon {
    id: number;
    abilities: Ability[];
    descriptions: Array<string>;
    evolution_chain: EvolutionChainSummary[];
    height: number;
    name: string;
    order: number;
    species: Species;
    types: Type[];
    weight: number;
    stats: Stat[];
}

export interface PokemonSummary {
    id: number;
    name: string;
}



