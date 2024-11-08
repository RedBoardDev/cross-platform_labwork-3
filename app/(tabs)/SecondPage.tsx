import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function SecondPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://placekitten.com/200/200' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.position}>Software Developer</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>About</Text>
        <Text style={styles.infoContent}>
          Passionate developer with experience in mobile and web applications. Loves coffee and exploring new technologies.
        </Text>
      </View>

      <Text style={styles.activitiesTitle}>Recent Activities</Text>
      <View style={styles.activitiesContainer}>
        <TouchableOpacity style={styles.activityButton}>
          <Text style={styles.activityButtonText}>Completed Project A</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activityButton}>
          <Text style={styles.activityButtonText}>Started Project B</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activityButton}>
          <Text style={styles.activityButtonText}>Joined Team Meeting</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#f3f8ff',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  position: {
    fontSize: 16,
    color: '#666',
  },
  infoCard: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginBottom: 10,
  },
  infoContent: {
    fontSize: 14,
    color: '#777',
    lineHeight: 20,
  },
  activitiesTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  activitiesContainer: {
    width: '100%',
  },
  activityButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5,
  },
  activityButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
