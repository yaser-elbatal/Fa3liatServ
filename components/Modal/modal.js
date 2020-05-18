import React, { Component } from "react";
import {
  View,
  Modal,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { width } from "../../common";

export class CustomModal extends Component {
  constructor(props) {
    super(props);
    const { height } = Dimensions.get("window");
    const { width } = Dimensions.get("window");
    this.height = height;
    this.width = width;
  }

  render() {
    const modalHeight = this.props.bottomHalf ? width * 0.68 : this.height;
    const styles = StyleSheetFactory.getSheet({
      boxBgColor: this.props.boxBackgroundColor,
      fullscreen: this.props.fullscreen,
      modalHeight: modalHeight,
      bottomHalf: this.props.bottomHalf,
    });
    return (
      <Modal
        animationType={this.props.animation}
        transparent={this.props.transparentContainer}
        visible={this.props.visible}
        presentationStyle={this.props.mode}
      >
        <TouchableWithoutFeedback onPress={() => this.props.outsideClick()}>
          <View style={styles.mainContainer}>
            <View style={styles.modalWrapper}>
              <View style={styles.modalContainer}>{this.props.children}</View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

class StyleSheetFactory {
  static getSheet({ boxBgColor, fullscreen, bottomHalf, modalHeight }) {
    const styles = StyleSheet.create({
      mainContainer: { flex: 1, opacity: 0.9, backgroundColor: "black" },
      modalWrapper: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",

        flex: 1,
      },
      modalContainer: {
        backgroundColor: boxBgColor,
        borderWidth: 1,
        borderColor: "lightgray",
        borderStyle: "solid",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        width: width,
        borderTopRightRadius: 70,
        borderTopLeftRadius: 70,
      },
    });

    if (fullscreen) {
      styles.modalWrapper = {
        ...styles.modalWrapper,
        flex: 1,
      };

      styles.modalContainer = {
        ...styles.modalContainer,
        flex: 1,
      };
    } else if (bottomHalf) {
      styles.modalWrapper = {
        ...styles.modalWrapper,
        marginTop: modalHeight,
      };

      styles.modalContainer = {
        ...styles.modalContainer,
        flex: 1,
      };
    } else {
      styles.modalWrapper = {
        ...styles.modalWrapper,
        flex: 1,
      };

      styles.modalContainer = {
        ...styles.modalContainer,
        marginHorizontal: 10,
      };
    }

    return styles;
  }
}
