/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Fragment } from "react";
import { FilterTag } from "./FilterTag";
import { Typography, Divider } from "antd";
const { Text } = Typography;

interface PropsType {
  title: string;
  tags: string[];
}

export const Filter: React.FC<PropsType> = ({ title, tags }) => {
  return (
    <div>
      <Text style={{ marginRight: 40, fontSize: 15, fontWeight: 500 }}>
        {title} :{" "}
      </Text>
      {tags.map((t, index) => {
        if (index === tags.length - 1)
          // @ts-ignore
          return <FilterTag key={`filter${index}`}>{t}</FilterTag>;
        return (
          <span key={`filter${index}`}>
            {/* @ts-ignore */}
            <FilterTag>{t}</FilterTag>
            <Divider type="vertical" />
          </span>
        );
      })}
    </div>
  );
};
