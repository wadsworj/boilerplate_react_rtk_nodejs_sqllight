import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { ChakraProvider, Button, Box, Text } from "@chakra-ui/react";
import { useGetExampleQuery } from "./apiSlice";

const App: React.FC = () => {
  const { data, error, isLoading } = useGetExampleQuery();

  return (
    <Provider store={store}>
      <ChakraProvider>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <Box p={4} bg="white" shadow="md" borderRadius="lg" className="p-6">
            <Text fontSize="xl" mb={4}>
              RTK Query Example
            </Text>
            {isLoading && <Text>Loading...</Text>}
            {error && <Text color="red.500">Error loading data</Text>}
            {data && <Text>Data: {data.message}</Text>}
            <Button colorScheme="blue" mt={4} onClick={() => {}}>
              Fetch Data
            </Button>
          </Box>
        </div>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
