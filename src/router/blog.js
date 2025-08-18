import {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog,
} from "../controller/blog.js";
import { SuccessModel, ErrorModel } from "../model/resModel.js";

const handleBlogRouter = (req, res) => {
  const method = req.method;
  const path = req.path;
  const id = req.query.id || "";

  // 获取博客列表
  if (method === "GET" && path === "/api/blog/list") {
    const author = req.query.author || "";
    const keyword = req.query.keyword || "";
    const listData = getList(author, keyword);
    return new SuccessModel(listData);
  }

  // 获取博客详情
  if (method === "GET" && path === "/api/blog/detail") {
    const detailData = getDetail(id);
    if (detailData) {
      return new SuccessModel(detailData);
    }
    return new ErrorModel("博客不存在");
  }

  // 新建博客
  if (method === "POST" && path === "/api/blog/new") {
    const blogData = newBlog(req.body);
    return new SuccessModel(blogData);
  }

  // 更新博客
  if (method === "POST" && path === "/api/blog/update") {
    const result = updateBlog(id, req.body);
    if (result) {
      return new SuccessModel();
    }
    return new ErrorModel("更新博客失败");
  }

  // 删除博客
  if (method === "POST" && path === "/api/blog/del") {
    const result = deleteBlog(id);
    if (result) {
      return new SuccessModel();
    }
    return new ErrorModel("删除博客失败");
  }
};

export default handleBlogRouter;
