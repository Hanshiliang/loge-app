import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar:
      "https://img0.baidu.com/it/u=1636089727,699356702&fm=26&fmt=auto&gp=0.jpg",
    siteTitle: "Han Shiliang的个人空间",
    github: "https://github.com/DuYi-Edu",
    qq: "1351109028",
    qqQrCode:
      "http://www.duyiedu.com/source/img/%E5%B0%8F%E6%B8%A1%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
    weixin: "hsllgdojs",
    weixinQrCode:
      "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
    mail: "1351109028qq.com",
    icp: "备案号：泸S689629989",
    githubName: "Han Shiliang",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
