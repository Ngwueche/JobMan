import React from 'react'
import { useState } from 'react'
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import { COLORS, SIZES } from '../../../constants'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;
  return (
    <View syle={styles.container}>
      <View style ={styles.header}>
        <Text style ={styles.headerTitle}>Popular JOBs</Text>
        <TouchableOpacity>
          <Text style = {styles.headerBtn}>
            Show All
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size= {SIZES.xxLarge} color={COLORS.primary}/>
        ): error ? (
          <Text>Something went wrong</Text>
        ): <FlatList
            data = {[1,2,3,4,,7,8]}
            renderItem = {({item})=>(
              <PopularJobCard
              item={item}
              />
            )}
            keyExtractor = {item =>item?.job_id}
            contentContainerStyle = {{columnGap:SIZES.medium}}
            horizontal

        />
        }
      </View>
    </View>
  )
}

export default Popularjobs