import {Model} from "@nozbe/watermelondb";
import {field, immutableRelation, relation} from "@nozbe/watermelondb/decorators";
import {Product} from "./product";

export class Nutriment extends Model {
    public static table = 'nutriments';
    @immutableRelation('products', 'product_id') product?: Product;
    @field('calcium') public calcium?: number;
    @field('calcium_100g') public calcium_100g?: number;
    @field('calcium_serving') public calcium_serving?: number;
    @field('calcium_unit') public calcium_unit?: string;
    @field('calcium_value') public calcium_value?: number;
    @field('carbohydrates') public carbohydrates?: number;
    @field('carbohydrates_100g') public carbohydrates_100g?: number;
    @field('carbohydrates_serving') public carbohydrates_serving?: number;
    @field('carbohydrates_unit') public carbohydrates_unit?: string;
    @field('carbohydrates_value') public carbohydrates_value?: number;
    @field('cholesterol') public cholesterol?: number;
    @field('cholesterol_100g') public cholesterol_100g?: number;
    @field('cholesterol_serving') public cholesterol_serving?: number;
    @field('cholesterol_unit') public cholesterol_unit?: string;
    @field('cholesterol_value') public cholesterol_value?: number;
    @field('energy') public energy?: number;
    @field('energy-kcal') public energy_kcal?: number;
    @field('energy-kcal_100g') public energy_kcal_100g?: number;
    @field('energy-kcal_serving') public energy_kcal_serving?: number;
    @field('energy-kcal_unit') public energy_kcal_unit?: string;
    @field('energy-kcal_value') public energy_kcal_value?: number;
    @field('energy-kcal_value_computed') public energy_kcal_value_computed?: number;
    @field('energy_100g') public energy_100g?: number;
    @field('energy_serving') public energy_serving?: number;
    @field('energy_unit') public energy_unit?: string;
    @field('energy_value') public energy_value?: number;
    @field('fat') public fat?: number;
    @field('fat_100g') public fat_100g?: number;
    @field('fat_serving') public fat_serving?: number;
    @field('fat_unit') public fat_unit?: string;
    @field('fat_value') public fat_value?: number;
    @field('fiber') public fiber?: number;
    @field('fiber_100g') public fiber_100g?: number;
    @field('fiber_serving') public fiber_serving?: number;
    @field('fiber_unit') public fiber_unit?: string;
    @field('fiber_value') public fiber_value?: number;
    @field('fruits-vegetables-nuts-estimate-from-ingredients_100g') public fruits_vegetables_nuts_estimate_from_ingredients_100g?: number;
    @field('fruits-vegetables-nuts-estimate-from-ingredients_serving') public fruits_vegetables_nuts_estimate_from_ingredients_serving?: number;
    @field('iron') public iron?: number;
    @field('iron_100g') public iron_100g?: number;
    @field('iron_serving') public iron_serving?: number;
    @field('iron_unit') public iron_unit?: string;
    @field('iron_value') public iron_value?: number;
    @field('nova-group') public nova_group?: number;
    @field('nova-group_100g') public nova_group_100g?: number;
    @field('nova-group_serving') public nova_group_serving?: number;
    @field('nutrition-score-fr') public nutrition_score_fr?: number;
    @field('nutrition-score-fr_100g') public nutrition_score_fr_100g?: number;
    @field('proteins') public proteins?: number;
    @field('proteins_100g') public proteins_100g?: number;
    @field('proteins_serving') public proteins_serving?: number;
    @field('proteins_unit') public proteins_unit?: string;
    @field('proteins_value') public proteins_value?: number;
    @field('salt') public salt?: number;
    @field('salt_100g') public salt_100g?: number;
    @field('salt_serving') public salt_serving?: number;
    @field('salt_unit') public salt_unit?: string;
    @field('salt_value') public salt_value?: number;
    @field('saturated-fat') public saturated_fat?: number;
    @field('saturated-fat_100g') public saturated_fat_100g?: number;
    @field('saturated-fat_serving') public saturated_fat_serving?: number;
    @field('saturated-fat_unit') public saturated_fat_unit?: string;
    @field('saturated-fat_value') public saturated_fat_value?: number;
    @field('sodium') public sodium?: number;
    @field('sodium_100g') public sodium_100g?: number;
    @field('sodium_serving') public sodium_serving?: number;
    @field('sodium_unit') public sodium_unit?: string;
    @field('sodium_value') public sodium_value?: number;
    @field('sugars') public sugars?: number;
    @field('sugars_100g') public sugars_100g?: number;
    @field('sugars_serving') public sugars_serving?: number;
    @field('sugars_unit') public sugars_unit?: string;
    @field('sugars_value') public sugars_value?: number;
    @field('trans-fat') public trans_fat?: number;
    @field('trans-fat_100g') public trans_fat_100g?: number;
    @field('trans-fat_serving') public trans_fat_serving?: number;
    @field('trans-fat_unit') public trans_fat_unit?: string;
    @field('trans-fat_value') public trans_fat_value?: number;
    @field('vitamin-a') public vitamin_a?: number;
    @field('vitamin-a_100g') public vitamin_a_100g?: number;
    @field('vitamin-a_serving') public vitamin_a_serving?: number;
    @field('vitamin-a_unit') public vitamin_a_unit?: string;
    @field('vitamin-a_value') public vitamin_a_value?: number;
    @field('vitamin-c') public vitamin_c?: number;
    @field('vitamin-c_100g') public vitamin_c_100g?: number;
    @field('vitamin-c_serving') public vitamin_c_serving?: number;
    @field('vitamin-c_unit') public vitamin_c_unit?: string;
    @field('vitamin-c_value') public vitamin_c_value?: number;
}