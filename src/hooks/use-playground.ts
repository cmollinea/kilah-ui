import { useState } from "react";

export type ComponentToShow = "playground" | "codeBlock";
export type BreakPoint = "400px" | "684px" | "748px" | "1024px" | "1280px";
export type SelectedLanguaje = "html" | "jsx";

export const usePlayground = () => {
  const [componentToShow, setComponentToShow] =
    useState<ComponentToShow>("playground");
  const [selectedLang, setSelectedLang] = useState<SelectedLanguaje>("html");
  const [showConfig, setShowConfig] = useState(false);
  const [breakPoint, setBreakPoint] = useState<BreakPoint>("1280px");

  const handleComponent = () => {
    if (componentToShow === "codeBlock") {
      setComponentToShow("playground");
    } else {
      setComponentToShow("codeBlock");
    }
  };

  const handleLang = () => {
    if (selectedLang === "jsx" || showConfig) {
      setSelectedLang("html");
      showConfig && setShowConfig(false);
    } else {
      setSelectedLang("jsx");
    }
  };

  const handleSwitchFile = () => {
    setShowConfig((prev) => !prev);
  };
  return {
    componentToShow,
    selectedLang,
    showConfig,
    breakPoint,
    setBreakPoint,
    handleLang,
    handleComponent,
    handleSwitchFile,
  };
};
