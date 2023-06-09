import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES } from "../../../constants";
import { useRouter } from "expo-router";
import styles from "./popularjobs.style";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch"


const Popularjobs = () => {
  const router = useRouter();
  const {  data, isLoading, error } = useFetch ('search',
  {query:"react developer",
  num_pages:1
});
const [selectedJob, setSelectedJob] = useState();
const handleCardPress = (item) => {}
// const error = false;
  return (
    <View syle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Protocols</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={SIZES.xLarge} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
