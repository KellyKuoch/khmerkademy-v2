import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const useUpdateProgress = () => {
  const updateProgress = async (userId, lessonId, progressData) => {
    const userProgressRef = doc(
      db,
      "userProgress",
      userId,
      "Progress",
      lessonId
    );
    await setDoc(userProgressRef, progressData, { merge: true });
  };
  return updateProgress;
};

export default useUpdateProgress;
