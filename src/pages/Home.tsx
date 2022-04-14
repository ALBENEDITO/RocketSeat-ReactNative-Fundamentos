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

interface SkillData {
  id: string;
  name: string;
}



export function Home(){
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [grettings, setGretting] = useState('');

  function handleAddNewSkill(){
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    console.log(data);

    setMySkills(oldState => [...oldState, data]);
  } 
  
  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ));
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

        <Button 
          title="Add"
          onPress={handleAddNewSkill} 
        />

        <Text style={[styles.title, { marginVertical: 50 }]}>
          My Skills
        </Text>

        <FlatList
            data={mySkills}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <SkillCard 
                skill={item.name}
                onPress={() => handleRemoveSkill(item.id)}
              />
            )}
        />
      </View> 
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
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