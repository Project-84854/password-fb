export const handleRoute = (path: string) => {
  switch (path) {
    case "/home":
      return "Welcome Home!";
    default:
      return "Route not found!";
  }
};
