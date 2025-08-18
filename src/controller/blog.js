const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: "标题A",
      content: "内容A",
      createTime: 1546610400000,
      author: "张三",
    },
    {
      id: 2,
      title: "标题B",
      content: "内容B",
      createTime: 1681814400000,
      author: "李四",
    },
  ];
};

const getDetail = (id) => {
  return {
    id: 1,
    title: "标题A",
    content: "内容A",
    createTime: 1546610400000,
    author: "张三",
  };
};

const newBlog = (blogData = {}) => {
  return {
    id: 3,
  };
};

const updateBlog = (id, blogData = {}) => {
  return true;
};

const deleteBlog = (id) => {
  return true;
};

export { getList, getDetail, newBlog, updateBlog, deleteBlog };
