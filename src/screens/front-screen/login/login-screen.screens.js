import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { getUserInfo } from "../../../authentication/api/login-info";
import { useState } from "react";
const LoginScreen = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getdata = async () => {
      const data = await getUserInfo("users/1");
      setUserData((courseData) => ({ ...courseData, ...data }));
    };
    getdata();
  }, []);
  let { name, avatar_url, location } = userData;
  return (
    <>
      {userData && (
        <View>
          <Text>{name}</Text>
          <Image
            style={{ width: "100%", height: "50%" }}
            source={{
              uri: avatar_url,
            }}
            resizeMode="contain"
          />
          <Text>{location}</Text>
        </View>
      )}
    </>
  );
};

// #endregion

export default LoginScreen;
