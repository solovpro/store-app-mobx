const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   entry: './src/index.tsx', // Точка входа в проект
   target: 'web',
   output: {
      filename: 'store-app.js',
      path: path.resolve(__dirname, 'build'), // путь вывода собранных файлов
      clean: true, // очищать перед каждой сборкой
   },
   resolve: {
      extensions: ['.js', '.jsx', 'ts', 'tsx', '.css', '.scss'],
   },
   module: {
      rules: [
         {
            test: /\.js|\.jsx|\.ts|\.tsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
         },
         {
            enforce: 'pre',
            exclude: /node_modules/,
            test: /\.js$|\.ts/,
            loader: 'source-map-loader',
         },
         {
            test: /\.scss$/,
            use: [
               MiniCssExtractPlugin.loader,
               {
                  loader: 'css-loader',
                  options: {
                     url: true,
                     modules: {
                        localIdentName: '[local]',
                     },
                  },
               },
               'postcss-loader',
               'sass-loader',
            ],
         },
         {
            test: /\.(ttf|svg|ico|png)$/,
            exclude: /node_modules/,
            type: 'asset',
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html',
         favicon: './src/assets/img/favicon.ico',
      }),
      new MiniCssExtractPlugin({
         filename: 'todo-list.css',
      }),
   ],
};
