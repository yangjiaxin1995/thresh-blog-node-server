import { exec } from "../db/mysql.js";

const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    sql += `and author='${author}' `;
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `;
  }
  sql += `order by createTime desc;`;
  return exec(sql);
};

const getDetail = async (id) => {
  const sql = `select * from blogs where id='${id}'`;
  const rows = await exec(sql);
  return rows[0];
};

const newBlog = async (blogData = {}) => {
  const title = blogData.title;
  const content = blogData.content;
  const author = blogData.author;
  const createtime = Date.now();
  const sql = `
    insert into blogs (title, content, author, createtime) values
    ('${title}', '${content}', '${author}', '${createtime}')
  `;
  const insertData = await exec(sql);
  return {
    id: insertData.insertId,
  };
};

const updateBlog = async (id, blogData = {}) => {
  const title = blogData.title;
  const content = blogData.content;
  const sql = `update blogs set title='${title}', content='${content}' where id=${id}`;
  const updateData = await exec(sql);
  if (updateData.affectedRows > 0) {
    return true;
  }
  return false;
};

const deleteBlog = async (id, author) => {
  const sql = `delete from blogs where id=${id} and author='${author}'`;
  const deleteData = await exec(sql);
  if (deleteData.affectedRows > 0) {
    return true;
  }
  return false;
};

export { getList, getDetail, newBlog, updateBlog, deleteBlog };
