import 'react-native-gesture-handler/jestSetup';

jest.useFakeTimers();
jest.mock(
    '@nozbe/watermelondb/adapters/sqlite/makeDispatcher/index.native.js',
    () => {
        return jest.requireActual(
            '@nozbe/watermelondb/adapters/sqlite/makeDispatcher/index.js',
        );
    },
);

jest.mock('expo-font');
jest.mock('expo-asset');
jest.mock('expo-file-system');
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');

    // The mock for `call` immediately calls the callback which is incorrect
    // So we override it with a no-op
    Reanimated.default.call = () => {};

    return Reanimated;
});

// jest.mock('expo-auth-session', () => {
//     let req: any = null;
//     let res: any = null;
//
//     const promptAsync = () => {
//         res = {type: 'success', params: {code: '123'}};
//         return Promise.resolve();
//     };
//
//     const useAuthRequest = () => {
//         return [req, res, promptAsync];
//     };
//
//     return {
//         makeRedirectUri: jest.fn(),
//         useAuthRequest,
//     };
// });

jest.mock('../src/constants');

// jest.mock('expo-location', () => {
//     const mod = jest.requireActual('expo-location');
//     let _callbacks: any[] = [];
//
//     return {
//         ...mod,
//         clearAll: () => {
//             _callbacks = [];
//         },
//         _emitLocation: (loc: any) => {
//             return Promise.all([_callbacks.map(cb => cb(loc))]);
//         },
//         requestForegroundPermissionsAsync: () => {
//             return Promise.resolve({status: 'granted'});
//         },
//         watchPositionAsync: jest.fn(function (_opts, cb) {
//             _callbacks.push(cb);
//
//             return Promise.resolve({remove: jest.fn()});
//             // jest.fn().mockResolvedValue()
//         }),
//     };
// });

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');