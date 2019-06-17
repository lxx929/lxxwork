import React from "react";
import logo from "./logo.svg";
import "./jd/style.css";

import Head from "./jd/header";
import Section from "./jd/section";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: {
        title: "京东JD.COM官网 多快好省 只为品质生活",
        img:
          "https://ecmb.bdimg.com/tam-ogel/00d635f3f29a58c7b92f6e8d67992432_121_121.jpg",
        content:
          "京东JD.COM-专业综合网上购物商城，销售超数万品牌，4020万种商品，囊括家电、手机、电脑、服装、居家、母婴、美妆、个护、食品、旅游等13大品类。京东PLUS会员，免费体验30天！京东秉承客户为先， 100％正品行货保障，提供全国联保，机打发票，专业配送，售后服务！"
      },
      center: [
        {
          title: "家用电器",
          img:
            "https://ecmb.bdimg.com/tam-ogel/0a6250044c055049cf85edc2c8deb30d_254_96.jpg",
          con: "全球年中购物节-家电嗨购	抢618元神券",
          link: ["玩所未玩", "冰洗疯抢618", "潮流小电集中营", "大屏电视会场"]
        },
        {
          title: "手机通讯",
          img:
            "https://ecmb.bdimg.com/tam-ogel/de8b577d9d03ae1207527971e30b1b6f_254_96.jpg",
          con: "全球年中购物节-家电嗨购	抢618元神券",
          link: ["玩所未玩", "冰洗疯抢618", "潮流小电集中营", "大屏电视会场"]
        }
      ]
    };
  }
  render() {
    let { header, center } = this.state;
    return (
      <div className="App">
        <Head header={header} />
        <Section center={center} />
      </div>
    );
  }
}

export default App;
