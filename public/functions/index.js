const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.deleteExpiredOrders = functions.pubsub
  .schedule("every 1 minutes")
  .onRun(async (context) => {
    const now = Date.now();
    const localNow = new Date(now + 8 * 60 * 60 * 1000).toString();

    console.log("Current Time (Local):", localNow);

    const expiredOrders = await admin
      .firestore()
      .collection("orders")
      .where("Status", "==", "Pending")
      .where("Expiration", "<=", now)
      .get();

    console.log("Expired Orders Found:", expiredOrders.size);

    const batch = admin.firestore().batch();

    expiredOrders.forEach((doc) => {
      console.log(
        "Deleting Order ID:",
        doc.id,
        "Expiration:",
        doc.data().Expiration
      );
      batch.delete(doc.ref);
    });

    await batch.commit();
    console.log("Expired orders deleted:", expiredOrders.size);
    return null;
  });
