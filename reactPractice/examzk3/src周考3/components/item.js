import React, { Component } from 'react'

export default class Item extends Component {
    
    render() {
        let { item, ind } = this.props;
         console.log(item, ind);
        return (
          <dl>
            <dt>
              <img src={item.img} />
              {/* <img src={require('../icon/Bitmap(1).png')} /> */}
            </dt>
            <dd>
              <p>
                {
                  // list.title
                }
              </p>
            </dd>
          </dl>
        );
    }
}
