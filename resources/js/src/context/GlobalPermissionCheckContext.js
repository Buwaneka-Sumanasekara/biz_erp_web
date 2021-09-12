import React from "react";

export const GlobalPermissionCheckContext = React.createContext({
  checkPermission: (PermissionId) => {}
  });
  