import React, { useEffect } from "react";
import { View } from "react-native";
import EventsModule from "../module/EventsModule";
import { Images } from "../../common";
import { _toHome, _toPartyDetailes } from "../../navigation/Navigator";

const Art = ({ route, navigation }) => {
  return (
    <View>
      <EventsModule
        IconRight={Images.right}
        IconLeft={Images.filter}
        RightImage={Images.signer}
        RightImg={Images.tabla}
        eventTypeImage={Images.hearings}
        label="حفله عمر خيرت"
        typeText="فن"
        onPress={() => _toHome(navigation)}
        onPress2={() => _toPartyDetailes(navigation)}
      />
    </View>
  );
};

export { Art };
