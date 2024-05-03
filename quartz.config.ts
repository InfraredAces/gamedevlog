import { color } from "d3"
import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

var palette = {
  themeDarker: "#470047",
  themeDark: "#610061",
  themeDarkAlt: "#730073",
  themePrimary: "#800080",
  themeSecondary: "#8f118f",
  themeTertiary: "#b347b3",
  themeLight: "#d998d9",
  themeLighter: "#ebc5eb",
  themeLighterAlt: "#faf0fa",
  black: "#000000",
  neutralDark: "#201f1e",
  neutralPrimary: "#323130",
  neutralPrimaryAlt: "#3b3a39",
  neutralSecondary: "#605e5c",
  neutralTertiary: "#a19f9d",
  white: "#ffffff",
  neutralTertiaryAlt: "#c8c6c4",
  neutralQuaternaryAlt: "#e1dfdd",
  neutralLight: "#edebe9",
  neutralLighter: "#f3f2f1",
  neutralLighterAlt: "#faf9f8",
}

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "InfraredAces",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "infraredaces.github.io/devlog",
    ignorePatterns: ["private", "templates", ".obsidian", "assets"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: palette.white,
          lightgray: palette.neutralLight,
          gray: palette.neutralDark,
          darkgray: palette.neutralPrimary,
          dark: palette.themePrimary,
          secondary: palette.themeSecondary,
          tertiary: palette.themeTertiary,
          highlight: palette.neutralLighterAlt,
        },
        darkMode: {
          light: palette.neutralDark,
          lightgray: palette.neutralSecondary,
          gray: palette.neutralLight,
          darkgray: palette.themeLighterAlt,
          dark: palette.themeLight,
          secondary: palette.themeLight,
          tertiary: palette.themeTertiary,
          highlight: palette.neutralPrimary,
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({
        markdownLinkResolution: "absolute",
        externalLinkIcon: true,
        prettyLinks: true,
      }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
