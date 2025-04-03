import { EffectEntry } from "./effect-entry.model";

export interface Ability {
    ability: AbilityInfo;
    is_hidden: boolean;
    slot: number;
    effect_entries: EffectEntry[];
}

export interface AbilityInfo {
    name: string;
    description: string;
    url: string;
}


