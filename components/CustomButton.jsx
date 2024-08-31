import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        {
          backgroundColor: "#32E0C4", // Background color
          borderRadius: 30, // Rounded corners
          minHeight: 62, // Minimum height
          paddingHorizontal: 20, // Add horizontal padding
          flexDirection: "row", // Flex direction for the inner elements
          justifyContent: "center", // Center items horizontally
          alignItems: "center", // Center items vertically
          width: "70%", // Set a fixed width to make it more elongated
          alignSelf: "center",
        },
        containerStyles,
        isLoading && { opacity: 0.5 }, // Handle opacity if loading
      ]}
      disabled={isLoading}
    >
      <Text
        style={[
          {
            color: "#fff", // Set the text color here
            fontWeight: "600", // Semi-bold font weight
            fontSize: 18,
          },
          textStyles,
        ]}
      >
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          style={{ marginLeft: 8 }}
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
