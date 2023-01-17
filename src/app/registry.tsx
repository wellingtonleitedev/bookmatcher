import React from "react";
import { useServerInsertedHTML } from "next/navigation";
import { getCssText } from "../../stitches.config";

export default function ServerStylesheet({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => (
    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
  ));

  return <>{children}</>;
}
