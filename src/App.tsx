import React from "react";
import "shared/styles/globals.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "shared/components/layout-ui/Layout";
import Main from "shared/components/layout-ui/Main";
import AimcLayout from "modules/aimc/components/AimcLayout";
import AimcMain from "./modules/aimc/components/AimcMain";
import AimcReport from "./modules/aimc/components/AimcReport";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
        },
    },
})

export const App: React.FC = ()=> {
  return (
    <QueryClientProvider client={queryClient}>
        <HelmetProvider>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Layout />}> {/*해당 컴포넌트 내에 <Outlet /> 필요*/}
                        <Route index element={<Main />} />
                        <Route path="/aimc" element={<AimcLayout />}> {/*해당 컴포넌트 내에 <Outlet /> 필요*/}
                            <Route index element={<AimcMain />} /> {/*menuNm, pageId 기본 값 설정해서 라우팅*/}
                            <Route path="/aimc/:menuNm/:pageId" element={<AimcReport />} />
                        </Route>
                    </Route>

                    {/*<Route path="/auth/error" element={<ErrorPage />} />*/}

                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    </QueryClientProvider>
  );
}
