import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { images } from "../../constants"; // Assume images for case illustrations

const CaseHistory = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="px-4 my-6 bg-primary h-full">
        <Text className="text-2xl text-white font-psemibold">Case History</Text>
        <ScrollView className="mt-6">
          <View className="mb-8">
            <Text className="text-xl text-white font-pmedium mb-2">
              Case #1: Nickwin Britto
            </Text>
            <Text className="text-base text-gray-100">
              Cold-Recog successfully identified Nickwin Britto, an unclaimed
              body found in the city. Through our advanced facial recognition,
              his identity was revealed, bringing closure to his family.This is
              for reference purpose only
            </Text>
            <Image
              source={images.britto} // Add an appropriate case image
              className="w-full h-48 mt-4"
              resizeMode="cover"
            />
          </View>
          <View className="mb-8">
            <Text className="text-xl text-white font-pmedium mb-2">
              Case #2: Jane Smith
            </Text>
            <Text className="text-base text-gray-100">
              In another case, Cold-Recog helped identify Jane Smith, who had
              been missing for several months. Our technology played a crucial
              role in solving this case.
            </Text>
            <Image
              source={images.case2Image} // Add an appropriate case image
              className="w-full h-48 mt-4"
              resizeMode="cover"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default CaseHistory;
