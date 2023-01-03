import React, { useEffect } from "react";
import { getMessengerClient } from "./Status";

export default function App() {
  useEffect(() => {
    const client = getMessengerClient();
    console.log("client", client);
  }, []);

  return (
    <div>
      <h2>Hello</h2>
    </div>
  );
}
