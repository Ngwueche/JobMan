import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router';
import styles from './welcome.style';
import { SIZES, icons } from '../../../constants';

const Welcome = () => {
  const router = useRouter();
  const jobTypes = ['Enzymology', 'Pharmacology','Nutritional', 'Environmental', 'Medical']
  const [activeJobType, setActiveJobType]  = useState('full-time');
  const [searchInput, setSearchInput] = useState('');

  return (
    <View>
      <View style = {styles.container}>
        <Text style = {styles.userName}>Hello Wisdom</Text>
        <Text style = {styles.welcomeMessage}>Find your research Protocol</Text>
      </View>

      <View style = {styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style = {styles.searchInput}
            value= {setSearchInput}
            onChange={''}
            placeholder='What research protocol are you looking for?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style = {styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data = {jobTypes}
          renderItem={({item})=>(
            <TouchableOpacity
              style = {styles.tab(activeJobType, item)}
              onPress={()=>{
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle ={{ columnGap:SIZES.small}}
          horizontal

        />
      </View>
    </View>
  )
}

export default Welcome