import { List, Comment, Tooltip } from "antd";
import React from "react";
import styles from "./ProductComments.module.scss";

// 数组类型定义
interface PropsType {
  data: {
    author: string;
    avatar: string;
    content: string;
    createDate: string;
  }[];
}
export const ProductComments = ({ data }: PropsType) => {
  return (
    <div>
      <List
        dataSource={data}
        itemLayout="horizontal"
        renderItem={(item) => {
          return (
            <li>
              <Comment
                author={item.author}
                avatar={item.avatar}
                content={item.author}
                datetime={item.createDate}
              />
            </li>
          );
        }}
      />
    </div>
  );
};
