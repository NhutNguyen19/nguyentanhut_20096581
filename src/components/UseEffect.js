import { View, Text, DeviceEventEmitter } from "react-native";
import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const sub = DeviceEventEmitter.addListener("event", (data) => {
      setData(data);
    });
    return () => {
      sub.remove();
    };
  }, []);
  return (
    <View>
      <Text>{data ? JSON.stringify(data) : "No data"}</Text>
    </View>
  );
};

export default UseEffect;
