import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import styles from '../../src/css/CustomMarkCss';

export default function CustomMarker({ coordinate, title, image, description }) {
    console.log('my location', coordinate);
    return (
        <Marker coordinate={coordinate}>
            <View style={styles.markerContainer}>
                <Image source={image} style={styles.markerImage} />
            </View>
            <Callout tooltip>
                <View style={styles.calloutContainer}>
                    <Text style={styles.calloutTitle}>{title}</Text>
                    <Text style={styles.calloutDescription}>{description}</Text>
                    <Image source={image} style={styles.calloutImage} />
                </View>
            </Callout>
        </Marker>
    );
}
