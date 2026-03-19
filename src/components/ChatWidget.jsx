import { useEffect } from "react";

export default function ChatWidget() {
  useEffect(() => {
    const existing = document.querySelector(
      'script[data-widget-id="69bb48088c5d73bcdf09cbf5"]'
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.setAttribute(
      "data-resources-url",
      "https://widgets.leadconnectorhq.com/chat-widget/loader.js"
    );
    script.setAttribute("data-widget-id", "69bb48088c5d73bcdf09cbf5");
    script.async = true;

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}