import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import Navigation from "./src/components/navigation";
import {PaperProvider} from "react-native-paper";

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
