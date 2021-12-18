import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

        export const BackButton = () => {
        const navigation = useNavigation();
        return (
            <TouchableOpacity style={styles.bckbtn} onPress={() => navigation.goBack()}>
            <Ionicons
                name="chevron-back-outline"
                size={28}
                color="black"
                style={{ width: 22, marginLeft: 10 }}
            />
            <Text style={{ marginRight: 50, fontSize: 20, marginTop: 1 }}>Back</Text>
            </TouchableOpacity>
        );
        };

        const styles = StyleSheet.create({
        bckbtn: {
            marginTop: 50,
            height: 40,
            width: 100,
            marginLeft: 20,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            backgroundColor: "rgba(249, 232, 0, 0.5)",
            paddingTop: 4,
            borderRadius: 16,
        },
        });
