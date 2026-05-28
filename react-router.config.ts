import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,

  // rednering at build time
  // async prerender() {
  //   return ["/", "about", "personal-info "]
  // }
} satisfies Config;
