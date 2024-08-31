// import {
//   Account,
//   Avatars,
//   Client,
//   Databases,
//   ID,
//   Query,
//   Storage,
// } from "react-native-appwrite";
//
// export const appwriteConfig = {
//   endpoint: "https://cloud.appwrite.io/v1",
//   platform: "com.team5xa.coldrecog",
//   projectId: "66c953f90008d5c7af19",
//   storageId: "66cc27230031b05f18a6",
//   databaseId: "66cc24e2001950979452",
//   userCollectionId: "66cc25a4003aa5f7f139",
//   videoCollectionId: "66cc932500236c2dbfd3",
// };
//
// const client = new Client();
//
// client
//   .setEndpoint(appwriteConfig.endpoint)
//   .setProject(appwriteConfig.projectId)
//   .setPlatform(appwriteConfig.platform);
//
// const account = new Account(client);
// const storage = new Storage(client);
// const avatars = new Avatars(client);
// const databases = new Databases(client);
//
// // Register user
// export async function createUser(email, password, username) {
//   try {
//     const newAccount = await account.create(
//       ID.unique(),
//       email,
//       password,
//       username,
//     );
//
//     if (!newAccount) throw Error;
//
//     const avatarUrl = avatars.getInitials(username);
//
//     await signIn(email, password);
//
//     const newUser = await databases.createDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.userCollectionId,
//       ID.unique(),
//       {
//         accountId: newAccount.$id,
//         email: email,
//         username: username,
//         avatar: avatarUrl,
//       },
//     );
//
//     return newUser;
//   } catch (error) {
//     throw new Error(error);
//   }
// }
//
// // Sign In
// export async function signIn(email, password) {
//   try {
//     const session = await account.createEmailSession(email, password);
//
//     return session;
//   } catch (error) {
//     throw new Error(error);
//   }
// }
//
// // Get Account
// export async function getAccount() {
//   try {
//     const currentAccount = await account.get();
//
//     return currentAccount;
//   } catch (error) {
//     throw new Error(error);
//   }
// }
//
// // Get Current User
// export async function getCurrentUser() {
//   try {
//     const currentAccount = await getAccount();
//     if (!currentAccount) throw Error;
//
//     const currentUser = await databases.listDocuments(
//       appwriteConfig.databaseId,
//       appwriteConfig.userCollectionId,
//       [Query.equal("accountId", currentAccount.$id)],
//     );
//
//     if (!currentUser) throw Error;
//
//     return currentUser.documents[0];
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }
//
// // Sign Out
// export async function signOut() {
//   try {
//     const session = await account.deleteSession("current");
//
//     return session;
//   } catch (error) {
//     throw new Error(error);
//   }
// }
//
// // Upload File
// export async function uploadFile(file, type) {
//   if (!file) return;
//
//   const { mimeType, ...rest } = file;
//   const asset = { type: mimeType, ...rest };
//
//   try {
//     const uploadedFile = await storage.createFile(
//       appwriteConfig.storageId,
//       ID.unique(),
//       asset,
//     );
//
//     const fileUrl = await getFilePreview(uploadedFile.$id, type);
//     return fileUrl;
//   } catch (error) {
//     throw new Error(error);
//   }
// }
//
// // Get File Preview
// export async function getFilePreview(fileId, type) {
//   let fileUrl;
//
//   try {
//     if (type === "video") {
//       fileUrl = storage.getFileView(appwriteConfig.storageId, fileId);
//     } else if (type === "image") {
//       fileUrl = storage.getFilePreview(
//         appwriteConfig.storageId,
//         fileId,
//         2000,
//         2000,
//         "top",
//         100,
//       );
//     } else {
//       throw new Error("Invalid file type");
//     }
//
//     if (!fileUrl) throw Error;
//
//     return fileUrl;
//   } catch (error) {
//     throw new Error(error);
//   }
// }
//
// // Create Video Post
// export async function createVideoPost(form) {
//   try {
//     const [thumbnailUrl, videoUrl] = await Promise.all([
//       uploadFile(form.thumbnail, "image"),
//       uploadFile(form.video, "video"),
//     ]);
//
//     const newPost = await databases.createDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.videoCollectionId,
//       ID.unique(),
//       {
//         title: form.title,
//         thumbnail: thumbnailUrl,
//         video: videoUrl,
//         prompt: form.prompt,
//         creator: form.userId,
//       },
//     );
//
//     return newPost;
//   } catch (error) {
//     throw new Error(error);
//   }
// }
//
// // Get all video Posts
// export async function getAllPosts() {
//   try {
//     const posts = await databases.listDocuments(
//       appwriteConfig.databaseId,
//       appwriteConfig.videoCollectionId,
//     );
//
//     return posts.documents;
//   } catch (error) {
//     throw new Error(error);
//   }
// }
//
// // Get video posts created by user
// export async function getUserPosts(userId) {
//   try {
//     const posts = await databases.listDocuments(
//       appwriteConfig.databaseId,
//       appwriteConfig.videoCollectionId,
//       [Query.equal("creator", userId)],
//     );
//
//     return posts.documents;
//   } catch (error) {
//     throw new Error(error);
//   }
// }
//
// // Get video posts that matches search query
// export async function searchPosts(query) {
//   try {
//     const posts = await databases.listDocuments(
//       appwriteConfig.databaseId,
//       appwriteConfig.videoCollectionId,
//       [Query.search("title", query)],
//     );
//
//     if (!posts) throw new Error("Something went wrong");
//
//     return posts.documents;
//   } catch (error) {
//     throw new Error(error);
//   }
// }
//
// // Get latest created video posts
// export async function getLatestPosts() {
//   try {
//     const posts = await databases.listDocuments(
//       appwriteConfig.databaseId,
//       appwriteConfig.videoCollectionId,
//       [Query.orderDesc("$createdAt"), Query.limit(7)],
//     );
//
//     return posts.documents;
//   } catch (error) {
//     throw new Error(error);
//   }
// }
//
//
import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
  Storage,
} from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.team5xa.coldrecog",
  projectId: "66c953f90008d5c7af19",
  storageId: "66cc27230031b05f18a6",
  databaseId: "66cc24e2001950979452",
  userCollectionId: "66cc25a4003aa5f7f139",
  imageCollectionId: "66cd929900236d547509", // Update with your image collection ID
};

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const storage = new Storage(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register user
export async function createUser(email, password, username) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username,
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username: username,
        avatar: avatarUrl,
      },
    );

    return newUser;
  } catch (error) {
    throw new Error(error);
  }
}

// Sign In
export async function signIn(email, password) {
  try {
    const session = await account.createEmailSession(email, password);

    return session;
  } catch (error) {
    throw new Error(error);
  }
}

// Get Account
export async function getAccount() {
  try {
    const currentAccount = await account.get();

    return currentAccount;
  } catch (error) {
    throw new Error(error);
  }
}

// Get Current User
export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)],
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Sign Out
export async function signOut() {
  try {
    const session = await account.deleteSession("current");

    return session;
  } catch (error) {
    throw new Error(error);
  }
}

// Upload File
export async function uploadFile(file, type) {
  if (!file) return;

  const { mimeType, ...rest } = file;
  const asset = { type: mimeType, ...rest };

  try {
    const uploadedFile = await storage.createFile(
      appwriteConfig.storageId,
      ID.unique(),
      asset,
    );

    const fileUrl = await getFilePreview(uploadedFile.$id, type);
    return fileUrl;
  } catch (error) {
    throw new Error(error);
  }
}

// Get File Preview
export async function getFilePreview(fileId, type) {
  let fileUrl;

  try {
    if (type === "image") {
      fileUrl = storage.getFilePreview(
        appwriteConfig.storageId,
        fileId,
        2000,
        2000,
        "top",
        100,
      );
    } else {
      throw new Error("Invalid file type");
    }

    if (!fileUrl) throw Error;

    return fileUrl;
  } catch (error) {
    throw new Error(error);
  }
}

// Create Image Post
export async function createImagePost(form) {
  try {
    const [imageUrl] = await Promise.all([uploadFile(form.image, "image")]);

    const newPost = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.imageCollectionId,
      ID.unique(),
      {
        title: form.title,
        image: imageUrl,
        prompt: form.prompt,
        creator: form.userId,
      },
    );

    return newPost;
  } catch (error) {
    throw new Error(error);
  }
}

// Get all image Posts
export async function getAllPosts() {
  try {
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.imageCollectionId,
    );

    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
}

// Get image posts created by user
export async function getUserPosts(userId) {
  try {
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.imageCollectionId,
      [Query.equal("creator", userId)],
    );

    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
}

// Get image posts that match search query
export async function searchPosts(query) {
  try {
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.imageCollectionId,
      [Query.search("title", query)],
    );

    if (!posts) throw new Error("Something went wrong");

    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
}

// Get latest created image posts
export async function getLatestPosts() {
  try {
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.imageCollectionId,
      [Query.orderDesc("$createdAt"), Query.limit(7)],
    );

    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
}
