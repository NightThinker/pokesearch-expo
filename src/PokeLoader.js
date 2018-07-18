import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

class PokeLoader extends React.Component {
    render() {
        return (
            <View>
                <Image 
                    source={{uri: 'https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif'}}
                    style={styles.img}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    img: {
        height: 400,
        width: 400,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default PokeLoader