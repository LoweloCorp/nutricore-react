import * as React from 'react';
import renderer, {
    ReactTestRenderer,
    ReactTestInstance,
} from 'react-test-renderer';
import App, {database} from "../App";
import {navigate} from "../src/lib/navigation";
import Home from "../src/screens/home";
import {User} from "../src/data/models/user";

describe( 'Product integration tests', () => {
    let screen!: ReactTestInstance;
    let tree!: ReactTestRenderer;

    beforeAll( () => {
        jest.mock(
            '@nozbe/watermelondb/adapters/sqlite/makeDispatcher/index.native.js',
            () => {
                return jest.requireActual(
                    '@nozbe/watermelondb/adapters/sqlite/makeDispatcher/index.js',
                );
            },
        );
    })

    beforeEach( async () => {
        await renderer.act(async () => {
            tree = renderer.create(<App />);
        });

        await renderer.act(async () => {
            navigate('Home');
        });

        screen = tree.root.findByType(Home);
    })

    afterEach(async () => {
        await database.write(async () => {
            await database.unsafeResetDatabase();
        });
    });

    test('create', async () => {
        // Example test: Create a record in your WatermelonDB tables
        await database.write(async () => {
            const newItem = await database.collections.get<User>('users').create(record => {
                // Populate the record properties as needed
                record.name = 'John Doe';
            });

            // Now newItem is of type User
            expect(newItem.name).toBe('John Doe'); // Example assertion
        });
    });
})