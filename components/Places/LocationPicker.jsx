import { View, StyleSheet, Alert } from 'react-native';
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location';
import { useNavigation } from '@react-navigation/native';

import OutLinedButton from '../UI/OutlinedButton';
import { Colors } from '../../constants/colors';

const LocationPicker = ({ onPickLocation }) => {
  const navigaton = useNavigation();
  const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
  const verifyPermissions = async () => {
    if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions!',
        'You need to grant camera permissions to use this app'
      );
      return false;
    }

    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }
    const location = await getCurrentPositionAsync();
    console.log('heya', location);
  };

  const pickOnMapHandler = () => {
    navigaton.navigate('Map');
  };
  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutLinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutLinedButton>
        <OutLinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutLinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
