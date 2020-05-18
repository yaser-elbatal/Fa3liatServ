import React, { useRef, useEffect } from "react";
import { View } from "react-native";
import { width, Images } from "../../../common";
import EventsModule from "../../module/EventsModule";
import { _toHome } from "../../../navigation/Navigator";

const Sports = ({ route, navigation }) => {
  return (
    <View>
      <EventsModule
        IconRight={Images.right}
        IconLeft={Images.filter}
        RightImage={Images.blay}
        RightImg={Images.bool}
        eventTypeImage={Images.ball}
        label="مباراه الاهلي والزمالك"
        typeText="رياضه"
        onPress={() => _toHome(navigation)}
        onClose={() => _toHome(navigation)}
      />
    </View>
  );
};
export { Sports };
