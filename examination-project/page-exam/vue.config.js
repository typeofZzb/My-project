module.exports ={
    chainWebpack: config => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
          item
            .use(['style-loader',
            'css-loader',
            'sass-loader'])
            .loader('sass-resources-loader')
            .options({
              // Or array of paths
              resources: ['./src/static/scss/_minix.scss', './src/static/scss/common.scss']
            })
            .end()
        })
    }, 
    // configureWebpack:{
    //     module :{
    //         // 或者 loaders
    //         rules:[
    //             {
    //                 test:/\.(css|scss|sass)$/,
    //                 loader:'webpack-px-to-rem',
    //                 // 这个配置是可选的
    //                  query:{
    //                     // 1rem=npx 默认为 10
    //                     basePx:10,
    //                     // 只会转换大于min的px 默认为0
    //                     // 因为很小的px（比如border的1px）转换为rem后在很小的设备上结果会小于1px，有的设备就会不显示
    //                     min:1,
    //                     // 转换后的rem值保留的小数点后位数 默认为3
    //                     floatWidth:3
    //                 }
     
    //             }
    //         ]
    //     }
    // },
    devServer: {
      // open: process.platform === 'darwin',
      // host: 'localhost',
      // open: true, //配置自动启动浏览器
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:7001', //对应自己的接口
          changeOrigin: true,
          pathRewrite:{
            "^/api":""
          }
          
        }
      }
     },
}