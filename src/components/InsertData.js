// dashboard/src/components/InsertData.js
import React, { useEffect } from "react";
import axios from "axios";
import { holdings, positions } from "../Data"; // ✅ सही path दें

const InsertData = () => {
  useEffect(() => {
    const alreadyInserted = localStorage.getItem("dataInserted");
    if (alreadyInserted) return;

    const insertAll = async () => {
      try {
        const hRes = await axios.post("http://localhost:3002/insertHoldings", holdings);
        console.log("✅ Holdings inserted:", hRes.data.message);

        const pRes = await axios.post("http://localhost:3002/insertPositions", positions);
        console.log("✅ Positions inserted:", pRes.data.message);

        localStorage.setItem("dataInserted", "true"); // ✅ दुबारा insert से बचाव
      } catch (err) {
        console.error("❌ Insert error:", err.message);
      }
    };

    insertAll();
  }, []);

  return null; // UI में कुछ नहीं दिखाना
};

export default InsertData;
