export const logRequest = (req: Request) => {
  console.log(`Received request: ${req.url}`);
};

logRequest(new Request("http://localhost"));
