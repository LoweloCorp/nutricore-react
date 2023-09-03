import {Model} from "@nozbe/watermelondb";
import {field, immutableRelation, relation} from "@nozbe/watermelondb/decorators";
import {Nutriment} from "./nutriment";

export class Product extends Model {
    public static table = 'products';
    @field('_id') public _id?: string;
    @field('generic_name') public generic_name?: string;
    @field('product_quantity') public product_quantity?: number;
    @field('quantity') public quantity?: string;
    @field('serving_quantity') public serving_quantity?: number;
    @field('serving_size') public serving_size?: string;
    @immutableRelation('nutriments', 'nutriment_id') public nutriment?: Nutriment;
}