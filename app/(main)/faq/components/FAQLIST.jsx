"use client";
import React from "react";
import FaqContent from "./FaqContent";
import CategoriesNavigation from "./CategoriesNavigation";
import SearchSection from "./SearchSection";

const FAQLIST = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <>
      {" "}
      <SearchSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {/* Categories Navigation */}
      <CategoriesNavigation />
      {/* FAQ Content */}
      <FaqContent searchQuery={searchQuery} />
    </>
  );
};

export default FAQLIST;
