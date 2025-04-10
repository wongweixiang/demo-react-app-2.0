import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import Navigation from "./Navigation";
import RouteContainer from "./RouteContainer";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { ThemeSync } from "./ThemeSync";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: () => {},
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

function App() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  // should listen for clicks outside div

  const ref = useOutsideClick(() => setIsNavOpen(false));

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <ThemeSync />
      <div className="flex">
        <div className="bg-gray-900" ref={ref}>
          <Navigation isDisplayed={isNavOpen} />
        </div>
        <div className="flex flex-col w-full min-h-screen box-border text-[calc(10px + 2vmin)]">
          <div className="fixed sm:hidden w-full h-14 flex items-center box-border p-5 z-10 bg-gray-900">
            <MenuOutlined
              className="text-2xl text-white"
              onClick={(e) => setIsNavOpen((prev) => !prev)}
            />
          </div>
          <RouteContainer />
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  );
}

const useOutsideClick = (callback: () => void) => {
  const ref = React.useRef() as any;

  React.useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);

  return ref;
};

export default App;
