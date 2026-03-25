import { useState } from "react";
import DocPage from "./features/doc-page/screens/DocPage.jsx";
import DocDetails from "./features/doc-page/screens/DocDetails.jsx";
import { docPageAssets } from "./features/doc-page/Data/docPageAssets.js";

export default function App() {
  const [selectedDoc, setSelectedDoc] = useState(null);

  if (selectedDoc) {
    return (
      <DocDetails
        doc={selectedDoc}
        assets={docPageAssets}
        onClose={() => setSelectedDoc(null)}
      />
    );
  }

  return <DocPage onOpenDetails={setSelectedDoc} />;
}
