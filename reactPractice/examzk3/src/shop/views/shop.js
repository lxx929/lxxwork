import React, { Component } from "react";
import Head from "../component/head";
import Foot from "../component/footer";
import { connect } from "react-redux";
import Btn from "../component/btn";
class Shop extends Component {
  render() {
    console.log(this.props, "props");
    let { list, sumPrice, allchecked } = this.props;
    return (
      <div>
        <Head />
        <section>
          {list &&
            list.map((item, index) => {
              return (
                <div key={index}>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => {
                      this.props.changecheck(item.id, !item.checked);
                    }}
                  />
                  <dl>
                    <dt>
                      <img src={item.img} />
                    </dt>
                    <dd>
                      <p>价格:{item.price}</p>
                      <p>商品:{item.title}</p>
                    </dd>
                  </dl>
                  <Btn count={item.count} id={item.id} />
                </div>
              );
            })}
          <div>
            <input
              type="checkbox"
              checked={allchecked}
              onChange={() => {
                console.log("全选");
                this.props.changeall(!allchecked);
              }}
            />
            全选
            <p>总价：{sumPrice}</p>
          </div>
        </section>
        <Foot />
      </div>
    );
  }
}

export default connect(
  state => {
    console.log(state);
    return {
      allchecked: state.shopcar.allchecked,
      sumPrice: state.shopcar.sumPrice,
      list: state.shopcar.list
    };
  },
  dispatch => {
    return {
      changecheck(id, flag) {
        dispatch({ type: "CHANGE_CHECK", id, flag });
      },
      changeall(flag) {
        dispatch({ type: "CHANGE_ALL", flag });
      }
    };
  }
)(Shop);
