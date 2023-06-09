import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES } from "../../../constants";
import { useRouter } from "expo-router";
import styles from "./nearbyjobs.style";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch"


const Nearbyjobs = () => {
  const router = useRouter();
  const {  data, isLoading, error } = useFetch ('search',
  {query:"react developer",
  num_pages:1
});
// const error = false;
  return (
    <View syle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bookmarked Protocols</Text>
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
          data ?.map((job) =>(
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate = {() => router.push(`/job-detials/${job.job_id}`)}
              horizontal
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
