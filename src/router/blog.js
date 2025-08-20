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
    const result = getList(author, keyword);
    return result.then((listData) => {
      return new SuccessModel(listData);
    });
  }

  // 获取博客详情
  if (method === "GET" && path === "/api/blog/detail") {
    const result = getDetail(id);
    return result.then((detailData) => {
      return new SuccessModel(detailData);
    });
  }

  // 新建博客
  if (method === "POST" && path === "/api/blog/new") {
    req.body.author = "thresh";
    const result = newBlog(req.body);
    return result.then((newBlogData) => {
      return new SuccessModel(newBlogData);
    });
  }

  // 更新博客
  if (method === "POST" && path === "/api/blog/update") {
    const result = updateBlog(id, req.body);
    return result.then((updateData) => {
      if (updateData) {
        return new SuccessModel();
      } else {
        return new ErrorModel("更新博客失败");
      }
    });
  }

  // 删除博客
  if (method === "POST" && path === "/api/blog/del") {
    const author = "thresh";
    const result = deleteBlog(id, author);
    return result.then((deleteData) => {
      if (deleteData) {
        return new SuccessModel();
      } else {
        return new ErrorModel("删除博客失败");
      }
    });
  }
};

export default handleBlogRouter;
