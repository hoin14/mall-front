import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import root from "./router/root";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={root}/>
      <ReactQueryDevtools initialIsOpen={true}></ReactQueryDevtools>
    </QueryClientProvider>
  );
}

export default App;
