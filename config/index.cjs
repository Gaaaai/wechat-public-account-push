/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx285f408bd79cd61c',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'fbe46eeb183b83267db029d23fdfc3b8',

  PROVINCE: '江苏',
  CITY: '连云港',

  USERS: [
    {
      // 想要发送的人的名字
      name: '改改',
      id: 'o4hSe6NkLjh8q2ycwImp7eE2KoCQ',

      name: '云总',
      id: 'o4hSe6OcteMxl9XukcVEOtapHocc',
      
      name: '刘总',
      id: 'o4hSe6Ha8pqXZr_QIj8IFDw1BStU',

      
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'JFgboT4jZ59G9NrnRalBeOVLM7Wn5UorB6djM1vKr3Y',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-06',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '一号', year: '2000', date: '06-01',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '二号', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '2Nd3vuZLiTsW498do_t5MZ-5rQ_a8CheMZ08rcmuDLs',

  CALLBACK_USERS: [
    {
      name: '改改',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o4hSe6NkLjh8q2ycwImp7eE2KoCQ',
    }
  ],

}

module.exports = USER_CONFIG



