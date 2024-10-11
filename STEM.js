import React from 'react';
import { View, Text, Button } from 'react-native';

const Challenge = () => {
    const handleChallengeSubmit = () => {
        // Logic for submitting challenge
    };

    return (
        <View>
            <Text>Weekly STEM Challenge: Build a bridge!</Text>
            <Button title="Submit Your Solution" onPress={handleChallengeSubmit} />
        </View>
    );
};

export default Challenge;
