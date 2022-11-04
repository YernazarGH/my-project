import { Tariff } from "./tariff";
import { UsedResources } from "./used-resources";

export interface UserInfo {
    tariff: Tariff,
    used_resources: UsedResources,
}