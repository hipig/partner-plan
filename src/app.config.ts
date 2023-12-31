export default {
  pages: [
    'pages/index/index',
    'pages/store/index',
    'pages/my/index',

    'pages/plan/template/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#eef2ff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#000000',
    selectedColor: '#DC143C',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/store/index',
        text: '奖励'
      },
      {
        pagePath: 'pages/my/index',
        text: '更多'
      }
    ]
  }
}
