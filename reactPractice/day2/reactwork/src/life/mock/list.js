import Mock from "mockjs";

Mock.mock("/api/data", {
  "list|10": [
    {
      title: "@ctitle",
      img: "@image(300x300)"
    }
  ]
});
