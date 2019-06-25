import Mock from "mockjs";
import hot from "./hot.json";

Mock.mock("/api/hot", {
  hot
});

Mock.mock("/api/login", ({ body }) => {
  let { name, pwd } = JSON.parse(body);
  if (name == "zs" && pwd == "123") {
    return {
      code: 1,
      mes: "成功"
    };
  } else {
    return {
      code: 0,
      mes: "失败"
    };
  }
});
