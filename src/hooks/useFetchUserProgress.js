import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, getDoc } from "firebase/firestore";

const useFetchUserProgress = (userId) => {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const fetchProgress = async () => {
      const progressRef = collection(db, "userProgress", userId, "Progress");
      const q = query(progressRef);
      const querySnapshot = await getDoc(q);

      const loadedProgress = [];
      querySnapshot.forEach((doc) => {
        loadedProgress.push({ lessonId: doc.id, ...doc.data() });
      });

      setProgress(loadedProgress);
    };
    fetchProgress();
  }, [userId]);
  return progress;
};

export default useFetchUserProgress;
