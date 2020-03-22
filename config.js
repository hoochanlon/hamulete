module.exports = {
    title: 'test',
    description: 'test',
    base: '/', //项目文件夹设置目录
    plugins: [
      // https://vuepress.github.io/zh/plugins 插件下载
      ['@vuepress/plugin-back-to-top'],//安装不了插件,建议非全局安装vue
      ['copyright', {
        noSelect: true,
        authorName:{
          "zh-CN": "hoochanlon"
        }
      }]
    ],
    themeConfig: {
      repo: 'https://github.com/hoochanlon/OA-QNA',
      nav: [{ text: '跳转首页', link: '/' }],
        sidebar: [
            {
                title: 'OA办公',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [['/oa-fault/oa','OA办公故障问题']]
              },
              {
                title: 'OA网络',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [['/net-debug/net','OA网络环境维护']]
              },
              {
                title: '软件故障',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [['/software-issue/other','办公软件使用异常']]
              },
              {
                title: '办公硬件',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [['/hard-bearkdown/hard','硬件调试处理']]
              },
              {
                title: '注意事项',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [['notice','维护细节注意说明']]
              },
              {
                title: '致谢',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [['thanks','感谢有你们在！']]
              }
            ]
          }
  }