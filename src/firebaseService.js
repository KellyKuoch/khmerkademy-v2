import { db } from "./firebase";

// Save User Progress with Completion Status
export const saveLessonProgress = async (
  userId,
  lessonId,
  progress,
  completed
) => {
  const lessonRef = db.doc(`users/${userId}/progress/${lessonId}`);
  try {
    await lessonRef.set(
      {
        progress,
        completed,
        lastUpdated: db.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    console.log("Lesson progress saved");
  } catch (error) {
    console.error("Error saving lesson progress:", error);
  }
};

// Fetch All Lessons Progress
export const fetchAllProgress = async (userId) => {
  const progressRef = db.collection(`users/${userId}/progress`);
  try {
    const snapshot = await progressRef.get();
    const lessonsProgress = {};
    snapshot.forEach((doc) => {
      lessonsProgress[doc.id] = doc.data();
    });
    return lessonsProgress;
  } catch (error) {
    console.error("Error fetching progress:", error);
    return {};
  }
};
