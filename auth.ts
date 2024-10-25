export const isAuthenticated = (user: string): boolean => {
  console.log(`Checking if ${user} is authenticated...`);
  return false; // Everyone is unauthenticated!
};

isAuthenticated("guest");
