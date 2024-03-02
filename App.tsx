import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import Navigation from "./src/components/navigation";
import {PaperProvider} from "react-native-paper";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import schema from "./src/data/schema";
import {Database} from "@nozbe/watermelondb";
import {Product} from "./src/data/models/product";
import {Nutriment} from "./src/data/models/nutriment";
import {Nutritional_log} from "./src/data/models/nutritional_log";
import {User} from "./src/data/models/user";

export default function App() {
    return (
        <PaperProvider>
            <Navigation />
        </PaperProvider>
    );
}
//// 2+2=5
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const adapter = new SQLiteAdapter({
    schema,
    // (You might want to comment it out for development purposes -- see Migrations documentation)
    // migrations,
    // (optional database name or file system path)
    // dbName: 'myapp',
    // (recommended option, should work flawlessly out of the box on iOS. On Android,
    // additional installation steps have to be taken - disable if you run into issues...)
    jsi: true, /* Platform.OS === 'ios' */
    // (optional, but you should implement this method)
    onSetUpError: error => {
        // Database failed to load -- offer the user to reload the app or log out
    }
})

// Then, make a Watermelon database from it!
export const database = new Database({
    adapter,
    modelClasses: [
        Product, Nutriment, Nutritional_log, User
    ],
})