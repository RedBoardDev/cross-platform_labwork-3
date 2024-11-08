import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome Home!</Text>
      <Text style={styles.subtitle}>Explore what’s new today</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Your Daily Highlights</Text>
        <Text style={styles.cardContent}>
          Catch up on the latest updates and stay connected.
        </Text>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.cardButtonText}>View More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Featured Articles</Text>
        <Text style={styles.cardContent}>Read the top stories selected for you.</Text>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.cardButtonText}>Explore</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => router.replace('/login')}
      >
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f3f8ff',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 14,
    color: '#777',
    marginBottom: 12,
  },
  cardButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  cardButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#ff4b4b',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
