import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
    version: 1,
    tables: [
        tableSchema({
            name: 'products',
            columns: [
                { name: '_id', type: 'string', isIndexed: true },
                { name: 'generic_name', type: 'string' },
                { name: 'nutriment_id', type: 'string', isIndexed: true },
                { name: 'product_quantity', type: 'number', isOptional: true },
                { name: 'quantity', type: 'string', isOptional: true },
                { name: 'serving_size', type: 'string', isOptional: true },
                { name: 'serving_quantity', type: 'number', isOptional: true },
            ]
        }),
        tableSchema({
            name: 'nutriments',
            columns: [
                { name: 'product_id', type: 'string', isIndexed: true },
                { name: 'user_id', type: 'string', isIndexed: true, isOptional: true },
                { name: 'calcium', type: 'number', isOptional: true },
                { name: 'calcium_100g', type: 'number', isOptional: true },
                { name: 'calcium_serving', type: 'number', isOptional: true },
                { name: 'calcium_unit', type: 'string', isOptional: true },
                { name: 'calcium_value', type: 'number', isOptional: true },
                { name: 'carbohydrates', type: 'number', isOptional: true },
                { name: 'carbohydrates_100g', type: 'number', isOptional: true },
                { name: 'carbohydrates_serving', type: 'number', isOptional: true },
                { name: 'carbohydrates_unit', type: 'string', isOptional: true },
                { name: 'carbohydrates_value', type: 'number', isOptional: true },
                { name: 'cholesterol', type: 'number', isOptional: true },
                { name: 'cholesterol_100g', type: 'number', isOptional: true },
                { name: 'cholesterol_serving', type: 'number', isOptional: true },
                { name: 'cholesterol_unit', type: 'string', isOptional: true },
                { name: 'cholesterol_value', type: 'number', isOptional: true },
                { name: 'energy', type: 'number', isOptional: true },
                { name: 'energy-kcal', type: 'number', isOptional: true },
                { name: 'energy-kcal_100g', type: 'number', isOptional: true },
                { name: 'energy-kcal_serving', type: 'number', isOptional: true },
                { name: 'energy-kcal_unit', type: 'string', isOptional: true },
                { name: 'energy-kcal_value', type: 'number', isOptional: true },
                { name: 'energy-kcal_value_computed', type: 'number', isOptional: true },
                { name: 'energy_100g', type: 'number', isOptional: true },
                { name: 'energy_serving', type: 'number', isOptional: true },
                { name: 'energy_unit', type: 'string', isOptional: true },
                { name: 'energy_value', type: 'number', isOptional: true },
                { name: 'fat', type: 'number', isOptional: true },
                { name: 'fat_100g', type: 'number', isOptional: true },
                { name: 'fat_serving', type: 'number', isOptional: true },
                { name: 'fat_unit', type: 'string', isOptional: true },
                { name: 'fat_value', type: 'number', isOptional: true },
                { name: 'fiber', type: 'number', isOptional: true },
                { name: 'fiber_100g', type: 'number', isOptional: true },
                { name: 'fiber_serving', type: 'number', isOptional: true },
                { name: 'fiber_unit', type: 'string', isOptional: true },
                { name: 'fiber_value', type: 'number', isOptional: true },
                { name: 'fruits-vegetables-nuts-estimate-from-ingredients_100g', type: 'number', isOptional: true },
                { name: 'fruits-vegetables-nuts-estimate-from-ingredients_serving', type: 'number', isOptional: true },
                { name: 'iron', type: 'number', isOptional: true },
                { name: 'iron_100g', type: 'number', isOptional: true },
                { name: 'iron_serving', type: 'number', isOptional: true },
                { name: 'iron_unit', type: 'string', isOptional: true },
                { name: 'iron_value', type: 'number', isOptional: true },
                { name: 'nova-group', type: 'number', isOptional: true },
                { name: 'nova-group_100g', type: 'number', isOptional: true },
                { name: 'nova-group_serving', type: 'number', isOptional: true },
                { name: 'nutrition-score-fr', type: 'number', isOptional: true },
                { name: 'nutrition-score-fr_100g', type: 'number', isOptional: true },
                { name: 'proteins', type: 'number', isOptional: true },
                { name: 'proteins_100g', type: 'number', isOptional: true },
                { name: 'proteins_serving', type: 'number', isOptional: true },
                { name: 'proteins_unit', type: 'string', isOptional: true },
                { name: 'proteins_value', type: 'number', isOptional: true },
                { name: 'salt', type: 'number', isOptional: true },
                { name: 'salt_100g', type: 'number', isOptional: true },
                { name: 'salt_serving', type: 'number', isOptional: true },
                { name: 'salt_unit', type: 'string', isOptional: true },
                { name: 'salt_value', type: 'number', isOptional: true },
                { name: 'saturated-fat', type: 'number', isOptional: true },
                { name: 'saturated-fat_100g', type: 'number', isOptional: true },
                { name: 'saturated-fat_serving', type: 'number', isOptional: true },
                { name: 'saturated-fat_unit', type: 'string', isOptional: true },
                { name: 'saturated-fat_value', type: 'number', isOptional: true },
                { name: 'sodium', type: 'number', isOptional: true },
                { name: 'sodium_100g', type: 'number', isOptional: true },
                { name: 'sodium_serving', type: 'number', isOptional: true },
                { name: 'sodium_unit', type: 'string', isOptional: true },
                { name: 'sodium_value', type: 'number', isOptional: true },
                { name: 'sugars', type: 'number', isOptional: true },
                { name: 'sugars_100g', type: 'number', isOptional: true },
                { name: 'sugars_serving', type: 'number', isOptional: true },
                { name: 'sugars_unit', type: 'string', isOptional: true },
                { name: 'sugars_value', type: 'number', isOptional: true },
                { name: 'trans-fat', type: 'number', isOptional: true },
                { name: 'trans-fat_100g', type: 'number', isOptional: true },
                { name: 'trans-fat_serving', type: 'number', isOptional: true },
                { name: 'trans-fat_unit', type: 'string', isOptional: true },
                { name: 'trans-fat_value', type: 'number', isOptional: true },
                { name: 'vitamin-a', type: 'number', isOptional: true },
                { name: 'vitamin-a_100g', type: 'number', isOptional: true },
                { name: 'vitamin-a_serving', type: 'number', isOptional: true },
                { name: 'vitamin-a_unit', type: 'string', isOptional: true },
                { name: 'vitamin-a_value', type: 'number', isOptional: true },
                { name: 'vitamin-c', type: 'number', isOptional: true },
                { name: 'vitamin-c_100g', type: 'number', isOptional: true },
                { name: 'vitamin-c_serving', type: 'number', isOptional: true },
                { name: 'vitamin-c_unit', type: 'string', isOptional: true },
                { name: 'vitamin-c_value', type: 'number', isOptional: true },
            ]
        }),
        tableSchema({
            name: 'nutritional_logs',
            columns: [
                { name: 'date', type: 'string', isIndexed: true },
                { name: 'product_id', type: 'string', isIndexed: true },
                { name: 'portion_size', type: 'number' },
                { name: 'quantity', type: 'number' },
            ]
        }),
        tableSchema({
            name: 'users',
            columns: [
                { name: 'name', type: 'string' },
                { name: 'token', type: 'string', isOptional: true },
                { name: 'nutriment_id', type: 'string', isIndexed: true },
            ]
        })
    ]
})