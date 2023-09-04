import renderer, {
    ReactTestRenderer,
    ReactTestInstance,
} from 'react-test-renderer';
import App, {database} from "../App";
import {navigate} from "../src/lib/navigation";
import Home from "../src/screens/home";

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

    test('create', () => {

    })
})