import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import { AsyncStorage, Platform } from "react-native";

const registerForPushNotificationsAsync = async () => {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== "granted") {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== "granted") {
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();

  let newToken = token.substr(18);
  await AsyncStorage.setItem(
    "deviceID",
    newToken.substr(0, newToken.length - 1)
  );
  //   console.log(
  //     "Push Notification In Notification.js",
  //     newToken.substr(0, newToken.length - 1),
  //     token
  //   );
};

export { registerForPushNotificationsAsync };
