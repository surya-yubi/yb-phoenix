import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import MyButton from "@yubi/button-example";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <MyButton text={"Hello"} onPress={() => {
                console.log("hello")
            }}/>
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
});
