import React from "react";
import { View, StyleSheet } from "react-native";
import { Images, width } from "../../common";
import { ListItem, SearchBar } from "react-native-elements";

const SearchBottom = () => {
  const list = [
    {
      name: "الايفنتات المقترحه",
      avatar_url: Images.Qusetion,
    },
    {
      name: "الايفنتات الشائعه",
      avatar_url: Images.star,
    },
    {
      name: "الايفنتات المفضله",
      avatar_url: Images.heart,
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <View style={{ bottom: width * 0.05 }}>
        <SearchBar
          placeholder="بحث"
          style={styles.searchbar}
          inputStyle={{ backgroundColor: "white" }}
          containerStyle={styles.searchcontainer}
          inputContainerStyle={{
            backgroundColor: "white",
            borderColor: "#E0E0E0",
            borderWidth: 1,
            width: width * 0.8,
            borderRadius: 100,
            borderBottomWidth: 1,
          }}
        />
      </View>
      <View style={{ bottom: width * 0.07 }}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: l.avatar_url }}
            title={l.name}
          />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  searchcontainer: {
    backgroundColor: "white",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    marginLeft: width * 0.04,
  },
  searchbar: {
    width: "100%",
  },
});
export { SearchBottom };
