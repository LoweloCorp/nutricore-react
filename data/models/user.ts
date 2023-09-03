import {Model} from "@nozbe/watermelondb";
import {date, field, immutableRelation, relation} from "@nozbe/watermelondb/decorators";
import {Product} from "./product";
import {Nutriment} from "./nutriment";

export class User extends Model {
    public static table = 'users';
    @field('name') public name?: string;
    @field('token') public string?: number;
    @immutableRelation('nutriments', 'nutriment_id') public nutriment?: Nutriment;
}