// import { Text, View, Image, TouchableOpacity } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { images } from "../../constants"; // Assuming images for the tab icon or illustration
// const Search = () => {
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#1a202c", padding: 20 }}>
//       <Text
//         style={{
//           fontSize: 24,
//           color: "#FFFFFF",
//           fontWeight: "600",
//           textAlign: "center",
//         }}
//       >
//         Identity Search
//       </Text>
//       <View style={{ marginTop: 20 }}>
//         <Text style={{ fontSize: 18, color: "#D1D1D1", textAlign: "center" }}>
//           Use Cold-Recog's advanced search tools to track and identify unclaimed
//           bodies. Simply enter any relevant details, and our system will guide
//           you through the process.
//         </Text>
//         <Image
//           source={images.searchIcon} // Add an appropriate image or icon
//           style={{
//             width: "100%",
//             height: 220,
//             marginTop: 40,
//             resizeMode: "contain",
//             shadowColor: "#000",
//             shadowOffset: { width: 0, height: 4 },
//             shadowOpacity: 0.3,
//             shadowRadius: 10,
//             elevation: 8,
//           }}
//         />
//       </View>
//       <View style={{ marginTop: 40 }}>
//         <TouchableOpacity
//           style={{
//             paddingVertical: 15,
//             paddingHorizontal: 30,
//             borderRadius: 30,
//             backgroundColor: "#32E0C4",
//             shadowColor: "#32E0C4",
//             shadowOffset: { width: 0, height: 8 },
//             shadowOpacity: 0.8,
//             shadowRadius: 20,
//             elevation: 10,
//           }}
//           onPress={() => alert("Search functionality coming soon!")} // Placeholder for future search functionality
//         >
//           <Text
//             style={{
//               fontSize: 18,
//               textAlign: "center",
//               color: "#1a202c",
//               fontWeight: "bold",
//             }}
//           >
//             Start Searching
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };
//
// export default Search;
//
//
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants"; // Assuming images for the tab icon or illustration

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Identity Search</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Use Cold-Recog's advanced search tools to track and identify
            unclaimed bodies. Simply enter any relevant details, and our system
            will guide you through the process.
          </Text>
          <Image
            source={images.searchIcon} // Add an appropriate image or icon
            style={styles.image}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Search functionality coming soon!")} // Placeholder for future search functionality
        >
          <Text style={styles.buttonText}>Start Searching</Text>
        </TouchableOpacity>

        {/* Additional Sections */}
        <View style={styles.additionalSections}>
          <TouchableOpacity
            style={styles.sectionButton}
            onPress={() => alert("About Us")}
          >
            <Text style={styles.sectionButtonText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sectionButton}
            onPress={() => alert("How to Use This App")}
          >
            <Text style={styles.sectionButtonText}>How to Use This App</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sectionButton}
            onPress={() => alert("Privacy Policy")}
          >
            <Text style={styles.sectionButtonText}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sectionButton}
            onPress={() => alert("Terms and Conditions")}
          >
            <Text style={styles.sectionButtonText}>Terms and Conditions</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a202c",
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "600",
    textAlign: "center",
  },
  descriptionContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  description: {
    fontSize: 18,
    color: "#D1D1D1",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 220,
    marginTop: 40,
    resizeMode: "contain",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    backgroundColor: "#32E0C4",
    shadowColor: "#32E0C4",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
    marginTop: 40,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    color: "#1a202c",
    fontWeight: "bold",
  },
  additionalSections: {
    marginTop: 40,
  },
  sectionButton: {
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: "#32E0C4",
    marginBottom: 10,
  },
  sectionButtonText: {
    fontSize: 18,
    textAlign: "center",
    color: "#1a202c",
    fontWeight: "bold",
  },
});

export default Search;
