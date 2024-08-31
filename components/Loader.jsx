// import { View, ActivityIndicator, Dimensions, Platform } from "react-native";
//
// const Loader = ({ isLoading }) => {
//   const osName = Platform.OS;
//   const screenHeight = Dimensions.get("screen").height;
//
//   if (!isLoading) return null;
//
//   return (
//     <View
//       className="absolute flex justify-center items-center w-full h-full bg-primary/60 z-10"
//       style={{
//         height: screenHeight,
//       }}
//     >
//       <ActivityIndicator
//         animating={isLoading}
//         color="#fff"
//         size={osName === "ios" ? "large" : 50}
//       />
//     </View>
//   );
// };
//
// export default Loader;
//
//
import { View, ActivityIndicator, Dimensions } from "react-native";

const Loader = ({ isLoading }) => {
  const screenHeight = Dimensions.get("screen").height;

  if (!isLoading) return null;

  return (
    <View
      style={{
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: screenHeight,
        backgroundColor: "rgba(0, 0, 0, 0.6)", // semi-transparent background
        zIndex: 10,
      }}
    >
      <ActivityIndicator
        animating={isLoading}
        color="#fff"
        size={50} // Standard size for Android
      />
    </View>
  );
};

export default Loader;
