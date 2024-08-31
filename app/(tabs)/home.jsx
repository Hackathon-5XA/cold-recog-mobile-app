import { useState } from "react";
import { SafeAreaView, ScrollView, Image, Text, View } from "react-native";
import { images } from "../../constants";
import { Animated } from "react-native";
import { SearchInput } from "../../components";
// Custom hook for fade-in animation with scale effect
const useAnimatedFadeIn = (initialScale = 1) => {
  const opacity = useState(new Animated.Value(0))[0];
  const scale = useState(new Animated.Value(initialScale))[0];

  const fadeIn = () => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return { opacity, scale, fadeIn };
};

const Home = () => {
  const {
    opacity: fadeInOpacity1,
    scale: scale1,
    fadeIn: fadeIn1,
  } = useAnimatedFadeIn(0.8);
  const {
    opacity: fadeInOpacity2,
    scale: scale2,
    fadeIn: fadeIn2,
  } = useAnimatedFadeIn(0.9);
  const {
    opacity: fadeInOpacity3,
    scale: scale3,
    fadeIn: fadeIn3,
  } = useAnimatedFadeIn(1);

  useState(() => {
    fadeIn1();
    setTimeout(fadeIn2, 500);
    setTimeout(fadeIn3, 1000);
  }, []);

  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Welcome Section */}
        <Animated.View
          style={{ opacity: fadeInOpacity1, transform: [{ scale: scale1 }] }}
          className="flex justify-between items-center flex-row mb-6"
        >
          <View>
            <Text className="font-pmedium text-sm text-gray-100">
              Welcome to
            </Text>
            <Text className="text-2xl font-psemibold text-white">
              Cold-Recog
            </Text>
          </View>

          <View className="mt-1.5">
            <Image
              source={images.loogo}
              className="w-12 h-14" // Enlarged the logo size
              resizeMode="contain"
            />
          </View>
        </Animated.View>

        {/* About Section with Enhanced Animation */}
        <Animated.View
          style={{ opacity: fadeInOpacity2, transform: [{ scale: scale2 }] }}
          className="mb-10"
        >
          <Text className="text-xl font-psemibold text-white mb-2">
            About Cold-Recog
          </Text>
          <Text className="text-base font-pregular text-gray-100">
            Cold-Recog is a cutting-edge facial recognition system designed to
            uncover the identities of unclaimed or unidentified individuals.
            Leveraging advanced AI, it offers rapid and accurate identification,
            providing closure to families and assisting authorities.
          </Text>
        </Animated.View>

        {/* Features Section with Enhanced Animation */}
        <Animated.View
          style={{ opacity: fadeInOpacity2, transform: [{ scale: scale2 }] }}
          className="mb-10"
        >
          <Text className="text-xl font-psemibold text-white mb-2">
            Key Features
          </Text>
          <View>
            <View className="mb-4">
              <Image
                source={images.features}
                className="w-full h-40 rounded-lg"
                resizeMode="cover"
              />
              <Text className="text-base font-pregular text-gray-100 mt-2">
                Advanced AI Algorithms
              </Text>
            </View>
            <View className="mb-4">
              <Image
                source={images.rapid}
                className="w-full h-40 rounded-lg"
                resizeMode="cover"
              />
              <Text className="text-base font-pregular text-gray-100 mt-2">
                Rapid Identification Process
              </Text>
            </View>
            <View className="mb-4">
              <Image
                source={images.secure}
                className="w-full h-40 rounded-lg"
                resizeMode="cover"
              />
              <Text className="text-base font-pregular text-gray-100 mt-2">
                Secure Data Handling
              </Text>
            </View>
          </View>
        </Animated.View>

        {/* Exploration Section with Final Animation */}
        <Animated.View
          style={{ opacity: fadeInOpacity3, transform: [{ scale: scale3 }] }}
          className="mb-10"
        >
          <Text className="text-xl font-psemibold text-white mb-2">
            Ready to Explore?
          </Text>
          <Text className="text-base font-pregular text-gray-100 mb-4">
            Discover how Cold-Recog can assist in identifying unknown
            individuals and bringing closure to their families.
          </Text>
          <SearchInput placeholder="Search the Database" />
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
