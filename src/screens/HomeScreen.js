import React, { Fragment } from 'react'
import { Text, StyleSheet } from 'react-native'
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps'
import ListScreen from './ListScreen'

const HomeScreen = (props) => {
    return (
        <Fragment>
            <Text> Home Screen </Text>
            <ListScreen banana={"Lots of bananas"} />
        </Fragment>)

}

export default HomeScreen