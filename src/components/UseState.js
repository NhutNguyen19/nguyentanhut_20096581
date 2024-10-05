import { View, Text, Button } from "react-native";
import React, { useState } from "react";

const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1;

const UseState = () => {
  const [diceRolls, setDiceRolls] = useState([]);
  return (
    <View>
      <Button
        title="Roll dice!"
        onPress={() => setDiceRolls([...diceRolls, randomDiceRoll()])}
      />
      {diceRolls.map((diceRolls, index) => (
        <Text style={{ fontSize: 24 }} key={index}>
          {diceRolls}
        </Text>
      ))}
    </View>
  );
};

export default UseState;
