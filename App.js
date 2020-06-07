import React from "react";
import Routes from "./src/Routes";
import Providers from "./src/Providers";

export default function App() {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
}
