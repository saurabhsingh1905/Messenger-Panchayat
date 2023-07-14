import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios"

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const navigation = useNavigation();

//   const register = () => {
//     if (email === "" || password === "" || phone === "") {
//       Alert.alert(
//         "Invalid Details",
//         "Please fill all the details",
//         [
//           {
//             text: "Cancel",
//             onPress: () => console.log("Cancel Pressed"),
//             style: "cancel",
//           },
//           { text: "OK", onPress: () => console.log("OK Pressed") },
//         ],
//         { cancelable: false }
//       );
//     }
//   };

  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
      image: image,
    };

    //send a POST request to backend api to register user
    axios.post("http://localhost:8000/register",user).then((response) => {
      console.log(response);

      Alert.alert(
        "Registration Successful",
        "You have been Registerd Successfully"
      );
      setName("");
      setEmail("");
      setPassword("");
      setImage("");
    }).catch((error)=>{
        Alert.alert(
            "Registration Error",
            "An error has occured while registering"
            
        )
        console.log("registration failed",error)
    });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        padding: 10,
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ fontSize: 25, color: "#4a55a2", fontWeight: "bold" }}>
            Messenger
          </Text>

          <Text style={{ fontSize: 18, marginTop: 8, fontWeight: "600" }}>
            Create a New Account
          </Text>
        </View>

        <View style={{ marginTop: 40 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons
              name="drive-file-rename-outline"
              size={24}
              color="black"
            />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Enter Your Name"
              placeholderTextColor="black"
              style={{
                fontSize: password ? 18 : 18,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                marginLeft: 13,
                width: 300,
                marginVertical: 15,
              }}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="black"
            />
            <TextInput
              placeholder="Enter Your Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor="black"
              style={{
                fontSize: email ? 18 : 18,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                marginLeft: 13,
                width: 300,
                marginVertical: 15,
              }}
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="key-outline" size={24} color="black" />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="black"
              style={{
                fontSize: password ? 18 : 18,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                marginLeft: 13,
                width: 300,
                marginVertical: 15,
              }}
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="image" size={24} color="black" />
            <TextInput
              value={image}
              onChangeText={(text) => setImage(text)}
              placeholder="Image"
              placeholderTextColor="black"
              style={{
                fontSize: password ? 18 : 18,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                marginLeft: 13,
                width: 300,
                marginVertical: 15,
              }}
            />
          </View>

          <Pressable
            onPress={handleRegister}
            style={{
              width: 200,
              backgroundColor: "#4a55a2",
              padding: 15,
              borderRadius: 7,
              marginTop: 40,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Text style={{ fontSize: 18, textAlign: "center", color: "white" }}>
              Register
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.goBack()}
            style={{ marginTop: 20 }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 17,
                color: "gray",
                fontWeight: "500",
              }}
            >
              Already have a account? Register
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
