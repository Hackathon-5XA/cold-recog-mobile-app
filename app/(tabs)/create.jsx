// import { useState } from "react";
// import { router } from "expo-router";
// import { ResizeMode, Video } from "expo-av";
// import * as DocumentPicker from "expo-document-picker";
// import { SafeAreaView } from "react-native-safe-area-context";
// import {
//   View,
//   Text,
//   Alert,
//   Image,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
//
// import { icons } from "../../constants";
// import { createVideoPost } from "../../lib/appwrite";
// import { CustomButton, FormField } from "../../components";
// import { useGlobalContext } from "../../context/GlobalProvider";
//
// const Create = () => {
//   const { user } = useGlobalContext();
//   const [uploading, setUploading] = useState(false);
//   const [form, setForm] = useState({
//     title: "",
//     video: null,
//     thumbnail: null,
//     prompt: "",
//   });
//
//   const openPicker = async (selectType) => {
//     const result = await DocumentPicker.getDocumentAsync({
//       type:
//         selectType === "image"
//           ? ["image/png", "image/jpg"]
//           : ["video/mp4", "video/gif"],
//     });
//
//     if (!result.canceled) {
//       if (selectType === "image") {
//         setForm({
//           ...form,
//           thumbnail: result.assets[0],
//         });
//       }
//
//       if (selectType === "video") {
//         setForm({
//           ...form,
//           video: result.assets[0],
//         });
//       }
//     } else {
//       setTimeout(() => {
//         Alert.alert("Document picked", JSON.stringify(result, null, 2));
//       }, 100);
//     }
//   };
//
//   const submit = async () => {
//     if (
//       (form.prompt === "") |
//       (form.title === "") |
//       !form.thumbnail |
//       !form.video
//     ) {
//       return Alert.alert("Please provide all fields");
//     }
//
//     setUploading(true);
//     try {
//       await createVideoPost({
//         ...form,
//         userId: user.$id,
//       });
//
//       Alert.alert("Success", "Post uploaded successfully");
//       router.push("/home");
//     } catch (error) {
//       Alert.alert("Error", error.message);
//     } finally {
//       setForm({
//         title: "",
//         video: null,
//         thumbnail: null,
//         prompt: "",
//       });
//
//       setUploading(false);
//     }
//   };
//
//   return (
//     <SafeAreaView className="bg-primary h-full">
//       <ScrollView className="px-4 my-6">
//         <Text className="text-2xl text-white font-psemibold">Upload Image</Text>
//
//         <FormField
//           title="Img Title"
//           value={form.title}
//           placeholder="Give your Img a catchy title..."
//           handleChangeText={(e) => setForm({ ...form, title: e })}
//           otherStyles="mt-10"
//         />
//
//         <View className="mt-7 space-y-2">
//           <Text className="text-base text-gray-100 font-pmedium">
//             Upload Image
//           </Text>
//
//           <TouchableOpacity onPress={() => openPicker("video")}>
//             {form.video ? (
//               <Video
//                 source={{ uri: form.video.uri }}
//                 className="w-full h-64 rounded-2xl"
//                 useNativeControls
//                 resizeMode={ResizeMode.COVER}
//                 isLooping
//               />
//             ) : (
//               <View className="w-full h-40 px-4 bg-black-100 rounded-2xl border border-black-200 flex justify-center items-center">
//                 <View className="w-14 h-14 border border-dashed border-secondary-100 flex justify-center items-center">
//                   <Image
//                     source={icons.upload}
//                     resizeMode="contain"
//                     alt="upload"
//                     className="w-1/2 h-1/2"
//                   />
//                 </View>
//               </View>
//             )}
//           </TouchableOpacity>
//         </View>
//
//         <View className="mt-7 space-y-2">
//           <Text className="text-base text-gray-100 font-pmedium">
//             Thumbnail Image
//           </Text>
//
//           <TouchableOpacity onPress={() => openPicker("image")}>
//             {form.thumbnail ? (
//               <Image
//                 source={{ uri: form.thumbnail.uri }}
//                 resizeMode="cover"
//                 className="w-full h-64 rounded-2xl"
//               />
//             ) : (
//               <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 flex justify-center items-center flex-row space-x-2">
//                 <Image
//                   source={icons.upload}
//                   resizeMode="contain"
//                   alt="upload"
//                   className="w-5 h-5"
//                 />
//                 <Text className="text-sm text-gray-100 font-pmedium">
//                   Choose a file
//                 </Text>
//               </View>
//             )}
//           </TouchableOpacity>
//         </View>
//
//         <FormField
//           title="AI Prompt"
//           value={form.prompt}
//           placeholder="The AI prompt of your Image...."
//           handleChangeText={(e) => setForm({ ...form, prompt: e })}
//           otherStyles="mt-7"
//         />
//
//         <CustomButton
//           title="Search"
//           handlePress={submit}
//           containerStyles="mt-7"
//           isLoading={uploading}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
//
// export default Create;
//
//
import { useState } from "react";
import { router } from "expo-router";
import * as DocumentPicker from "expo-document-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  Alert,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { icons } from "../../constants";
import { createImagePost } from "../../lib/appwrite"; // Adjust this import based on your file structure
import { CustomButton, FormField } from "../../components";
import { useGlobalContext } from "../../context/GlobalProvider";

const Create = () => {
  const { user } = useGlobalContext();
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    image: null,
    prompt: "",
  });

  const openPicker = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ["image/png", "image/jpg", "image/jpeg"],
    });

    if (!result.canceled) {
      setForm({
        ...form,
        image: result.assets[0],
      });
    } else {
      Alert.alert("Document picked", JSON.stringify(result, null, 2));
    }
  };

  const submit = async () => {
    if (form.prompt === "" || form.title === "" || !form.image) {
      return Alert.alert("Please provide all fields");
    }

    setUploading(true);
    try {
      await createImagePost({
        ...form,
        userId: user.$id,
      });

      Alert.alert("Success", "Post uploaded successfully");
      router.push("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setForm({
        title: "",
        image: null,
        prompt: "",
      });

      setUploading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1a202c" }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={{ fontSize: 24, color: "#FFFFFF", fontWeight: "600" }}>
          Upload Image
        </Text>

        <FormField
          title="Image Title"
          value={form.title}
          placeholder="Give your image a catchy title..."
          handleChangeText={(e) => setForm({ ...form, title: e })}
          style={{ marginTop: 20 }}
        />

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 16, color: "#D1D1D1" }}>Upload Image</Text>

          <TouchableOpacity onPress={openPicker} style={{ marginTop: 10 }}>
            {form.image ? (
              <Image
                source={{ uri: form.image.uri }}
                style={{
                  width: "100%",
                  height: 200,
                  borderRadius: 15,
                  resizeMode: "cover",
                }}
              />
            ) : (
              <View
                style={{
                  width: "100%",
                  height: 150,
                  backgroundColor: "#2d3748",
                  borderRadius: 15,
                  borderWidth: 2,
                  borderColor: "#4a5568",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={icons.upload}
                  style={{ width: 40, height: 40, tintColor: "#4fd1c5" }}
                />
                <Text style={{ color: "#D1D1D1", marginTop: 10 }}>
                  Choose an image
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <FormField
          title="AI Prompt"
          value={form.prompt}
          placeholder="The AI prompt for your image..."
          handleChangeText={(e) => setForm({ ...form, prompt: e })}
          style={{ marginTop: 20 }}
        />

        <CustomButton
          title="Upload"
          handlePress={submit}
          containerStyle={{ marginTop: 20 }}
          isLoading={uploading}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
