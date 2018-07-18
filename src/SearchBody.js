import React from 'react';
import { ScrollView, Text, View} from 'react-native'

class SearchBody extends React.Component {
    render() {
        const pokeData = this.props.data
        if (!pokeData) {
            return <View/>
        }
        return (
            <ScrollView style={{flex: 1}}>
                <Text style={styles.header}>#{pokeData.id} - {pokeData.name.toUpperCase()}</Text>
            </ScrollView>
        )
    }
}

const styles = {
    header: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center'
    }
}

export default SearchBody