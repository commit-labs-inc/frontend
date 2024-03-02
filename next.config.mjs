/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.extensions.push(".wasm");
    config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    });
    config.module.rules.push({
      test: /\.(txt|md|html)$/,
      use: "raw-loader",
    });
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    // Add a rule for .wasm files
    config.module.rules.push({
      test: /\.wasm$/,
      type: "javascript/auto",
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "public",
            name: "[name].[ext]",
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
