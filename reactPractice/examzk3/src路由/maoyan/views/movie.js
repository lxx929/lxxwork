import React, { Component } from "react";
import Head from "../components/head";
import Foot from "../components/foot";

// import Hot from './hot'
// import Release from './release'
import RouterView from "../router/routerview";
// import routes
import { NavLink } from "react-router-dom";
export default class Movie extends Component {
  render() {
    console.log(this.props);
    let { history, child } = this.props;
    return (
      <div>
        <Head back={false} title="电影" />
        <section>
          <div className="title">
            <span onClick={this.handleCity.bind(this, history)}>城市</span>
            <div>
              <NavLink to="/movie/hot">正在热映</NavLink>
              <NavLink to="/movie/release">即将上映</NavLink>
            </div>
            <span
              onClick={() => {
                history.push("/search");
              }}
            >
              搜索
            </span>
          </div>
          <RouterView routes={child} />
          {/* <Switch>
                        <Route path="/movie/hot" component={Hot} />
                        <Route path="/movie/release" component={Release} />
                        <Redirect from="/movie" to="/movie/hot" />
                    </Switch> */}
        </section>
        <Foot />
      </div>
    );
  }
  handleCity(history) {
    console.log("dianji ", history);
    history.push("/city");
    // history.push({
    //     pathname:'/city'
    // });
    // history.replace('/city')
  }
}
