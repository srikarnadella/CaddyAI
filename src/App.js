import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import Logo from "./Images/Logo.png";
const App = () => {
  const [yardages] = useState({
    Driver: "250",
    "3 Wood": "220",
    "5 Wood": "200",
    Hybrid: "180",
    "3 Iron": "170",
    "4 Iron": "160",
    "5 Iron": "150",
    "6 Iron": "140",
    "7 Iron": "130",
    "8 Iron": "120",
    "9 Iron": "110",
    "Pitching Wedge": "100",
    "Sand Wedge": "90",
    "Lob Wedge": "80",
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Caddy AI</Text>
        <Image source={Logo} style={styles.logo} />
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.tableContainer}>
          <Text style={styles.tableHeader}>Yardages</Text>
          <View style={styles.table}>
            {Object.entries(yardages).map(([club, value]) => (
              <View style={styles.tableRow} key={club}>
                <Text style={styles.club}>{club}</Text>
                <Text style={styles.yardage}>{value}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>CaddyAI Chatbot</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Input Shot</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Enter Yardages</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // Dark background color
  },
  header: {
    flexDirection: "row", // Align children horizontally
    justifyContent: "space-between", // Spread children evenly
    alignItems: "center", // Center children vertically
    backgroundColor: "#000", // Dark header background color
    padding: 20,
  },
  headerText: {
    color: "#fff", // Light header text color
    fontSize: 24,
    fontWeight: "bold",
  },
  logo: {
    width: 50, // Adjust width as needed
    height: 50, // Adjust height as needed
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10, // Add buffer between header and table
  },
  tableContainer: {
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10, // Add buffer between table and buttons
  },
  tableHeader: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 10,
  },
  table: {
    flexDirection: "column",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  club: {
    color: "#fff",
    fontSize: 16,
  },
  yardage: {
    color: "#fff",
    fontSize: 16,
  },
  buttonContainer: {},
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: 150, // Set a fixed width for the buttons
    justifyContent: "center", // Center button content horizontally
    alignItems: "center", // Center button content vertically
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default App;
