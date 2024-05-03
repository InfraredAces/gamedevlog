import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime"
import { i18n } from "../../i18n"
const NotFound = ({ cfg }) => {
  return _jsxs("article", {
    class: "popover-hint",
    children: [
      _jsx("h1", { children: "404" }),
      _jsx("p", { children: i18n(cfg.locale).pages.error.notFound }),
    ],
  })
}
export default () => NotFound
