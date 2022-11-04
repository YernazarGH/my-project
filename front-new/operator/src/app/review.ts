import { Tariff } from './tariff';

export interface Review {
    username: string,
    tariff: Tariff,
    text: string,
}
