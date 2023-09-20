import React, { useEffect } from "react";
import { View, Text, ImageBackground } from "react-native";
import { getUserInfo } from "../../../authentication/api/login-info";
import { useState } from "react";
import { userCardStyle } from "./user-card.styles";
const UserCard = () => {
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
        <View style={userCardStyle.container}>
          <ImageBackground
            style={userCardStyle.imageStyle}
            source={{
              uri: avatar_url,
            }}
            resizeMode="contain"
          >
            <View style={userCardStyle.cardBody}>
              <Text style={userCardStyle.cardHeader}>{name}</Text>
              <Text style={userCardStyle.cardInfo}>{location}</Text>
            </View>
          </ImageBackground>
        </View>
      )}
    </>
  );
};

// #endregion

export default UserCard;
