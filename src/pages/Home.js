import React, {useState, useEffect } from 'react';
import { 
  View,
  Text, 
  StyleSheet, 
  TextInput, 
  FlatList
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCards';

export function Home(){
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [grettings, setGretting] = useState('');

  function handleAddNewSkill(){
    setMySkills(oldState => [...oldState, newSkill]);
  }  

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGretting ('Good mornig');
    } else if ( currentHour >=12 && currentHour < 18) {
      setGretting ('Good Afternoon');
    } else {
      setGretting('Good night');
    }
  },[]);

  return (
      <View style={styles.container}>

        <Text style={styles.title}>
          React Native
        </Text>

        <Text style={styles.grettings}>
          {grettings}
        </Text>

        <TextInput 
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill} />

        <Text style={[styles.title, { marginVertical: 50 }]}>
          My Skills
        </Text>

        <FlatList
            data={mySkills}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <SkillCard skill={item}/>
            )}
        />
      </View> 
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 70,
        paddingHorizontal: 30
    },
    title: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold'
    },
    input: {
      backgroundColor: '#1F1E25',
      color: '#FFF',
      fontSize: 18,
      marginTop: 30,
      borderRadius: 7,
      marginBottom: 30
    },
    grettings: {
      color: '#fff',
    }
});