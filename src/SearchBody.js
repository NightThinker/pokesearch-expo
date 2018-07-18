import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native'
import { ListItem, List } from 'native-base';

class SearchBody extends React.Component {
    render() {
        const pokeData = this.props.data
        if (!pokeData) {
            return <View/>
        }
        return (
            <ScrollView style={{flex: 1}}>
                <Text style={styles.header}>#{pokeData.id} - {pokeData.name.toUpperCase()}</Text>
                <View style={styles.viewStyle}>
                    <Image 
                        source={{uri: pokeData.sprites.front_default}}
                        style={styles.img}
                    />
                </View>
                <View style={styles.info}>
                    <ListItem itemDivider>
                        <Text style={{fontWeight: 'bold'}}>Size</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text >Weight - {pokeData.weight} kg</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text >Height - {pokeData.height} in</Text>
                    </ListItem>
                </View>
            </ScrollView>
        )
    }
}

const styles = {
    header: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center'
    },
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        height: 200,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        flex: 1,
        backgroundColor: 'white',
        opacity: 0.8
    }
}

export default SearchBody