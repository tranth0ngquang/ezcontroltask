'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Fragment } from "react";
import { ProviderIndexPage } from "./provider/ProviderIndexPage";
import Header from "./section/component/Header";

const IndexPage = () => {
  const queryClient = new QueryClient();

  return (
    <Fragment>
      {/* Bao bọc trang IndexPage bằng QueryClientProvider và provider riêng */}
      <QueryClientProvider client={queryClient}>
        <ProviderIndexPage>
          <Header />
        </ProviderIndexPage>
      </QueryClientProvider>
    </Fragment>
  );
};

export default IndexPage;
