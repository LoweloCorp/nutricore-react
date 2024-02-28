import {Model} from "@nozbe/watermelondb";
import {date, field, relation} from "@nozbe/watermelondb/decorators";
import {Product} from "./product";

export class Nutritional_log extends Model {
    public static table = 'nutritional_logs';
    @date('date') public date?: string | symbol;
    @relation('products', 'product_id') public product?: Product;
    @field('portion_size') public portion_size?: number;
    @field('quantity') public quantity?: number;

}

