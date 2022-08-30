import {StatusBar} from 'expo-status-bar';
import {Button, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [result, setResult] = useState('Result:');
    const [a, setA] = useState('');
    const [b, setB] = useState('');

    const addition = () => {
        let res = parseFloat(a) + parseFloat(b);
        setResult('Result: ' + res);
    }

    const substraction = () => {
        let res = parseFloat(a) - parseFloat(b);
        setResult('Result: ' + res);
    }

    return (
        <View style={styles.container}>
            <Text
                style={styles.result}>
                {result}
            </Text>
            <TextInput
                keyboardType="numeric"
                style={styles.textInput}
                onChangeText={a => setA(a)} value={a}/>
            <TextInput
                keyboardType="numeric"
                style={styles.textInput}
                onChangeText={b => setB(b)} value={b}/>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Pressable
                    style={styles.button}
                    onPress={addition}>
                    <Text style={styles.text}>+</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={substraction}>
                    <Text style={styles.text}>-</Text>
                </Pressable>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        borderColor: "#000",
        height: 44,
        marginTop: 11,
        marginBottom: 5,
        width: 200,
        borderWidth: 1
    },
    result: {
        fontSize: 16
    },
    button: {
        paddingVertical: 11,
        paddingHorizontal: 11,
        marginTop: 11,
        backgroundColor: 'lightblue',
        marginHorizontal: 11
    }
});
