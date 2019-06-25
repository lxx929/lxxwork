import Mock from "mockjs";

let data = Mock.mock({
  "list|10-20": [
    {
      img: "@image(200x200,#f0f)",
      title: "@ctitle",
      "price|10-20": 1,
      "id|+1": 1
    }
  ]
});

Mock.mock("/api/list", data);
