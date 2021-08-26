import React from "react";

export const GlobalAlertContext = React.createContext({
    showAlert: (type,msg) => {},
  });
  