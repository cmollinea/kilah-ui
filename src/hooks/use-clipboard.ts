import { useCallback } from "react";
import { useAlertContext } from "./use-alert-context";

export const useClipboard = () => {
  const { setShowAlert } = useAlertContext();

  const copyToClipboard = useCallback(
    (text: string) => {
      const type = "text/plain";
      const blob = new Blob([text], { type });
      const data = [new ClipboardItem({ [type]: blob })];

      navigator.clipboard.write(data).then(
        () => {
          setShowAlert(true);
        },
        () => {
          /* failure */
        },
      );
    },
    [setShowAlert],
  );

  return { copyToClipboard };
};
