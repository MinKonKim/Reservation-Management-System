import type { NextConfig } from "next";
import { Options } from "./node_modules/deepmerge/index.d";

const nextConfig: NextConfig = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule: { test?: RegExp }) =>
      rule.test?.test?.(".svg")
    );
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resoureQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              title: true,
              // svgo: false,
            },
          },
        ],
      }
    );

    return config;
  },
};

export default nextConfig;
