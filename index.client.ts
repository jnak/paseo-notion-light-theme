import type { PluginClientContext } from "@getpaseo/plugin/client";

// Values are Notion's `:root, .notion-light-theme` tokens, read from the desktop app on 2026-10-11.
export default function contribute(client: PluginClientContext) {
  const remove = client.addTheme({
    id: "notion-light",
    name: "Notion Light",
    appearance: "light",
    colors: {
      background: "#ffffff", // --c-bacPri: page
      foreground: "#2c2c2b", // --c-texPri: body text; also Paseo's primary button, like Notion's --c-bacAccPri
      raised: "#f9f8f7", // --c-bacSec: cards, tool headers, sidebar hover; one step off white, like Paseo's
      control: "#f4f3f3", // --c-bacInt: Notion's input fill; Paseo also paints the light sidebar with it
      border: "#ebebe9", // --cl-palGra90 on white: visible selected row; Paseo also fills user bubbles with it
      accent: "#2383e2", // --c-palUiBlu600: Notion blue
      mutedForeground: "#7d7a75", // --c-texSec
      ring: "#a19e99", // --c-texTer: extra-muted text, scrollbars, terminal bright black
    },
  });
  return remove;
}
