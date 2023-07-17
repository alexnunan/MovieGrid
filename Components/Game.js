import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function Game() {
    const data = ['', '', '', '', '', '', '', '', ''];
    return (
        <View style={styles.gameView}>
            <FlatList
                data={data}
                numColumns={3}
                style={styles.container}
                renderItem={({ item: gridBox }) => <Text style={styles.element}></Text>}
            />
        </View>       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    element: {
        width: 70,
        height: 70,
        backgroundColor:"#bebebe",
        margin: 5,
        borderWidth: 1,
    },
    gameView: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 60
    },
});