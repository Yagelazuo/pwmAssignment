import React from "react";
import { CardStore } from "../Card/card";
import { GridContainer } from "./Home.style";
import { Related } from "../Related/Related";
import { Select } from "antd";
import { Item } from "../../types/types";

export const Home = (props: {
  setSort: Function;
  setItemToWatch: Function;
  items: Item[];
}) => {
  const { Option } = Select;
  return (
    <div>
      <Select
        defaultValue="Select sort Type"
        style={{ width: 220 }}
        onSelect={(value) => props.setSort(value)}
      >
        <Option value="cheapest">Cheapest</Option>
        <Option value="mostExpensive">Most Expensive</Option>
        <Option value="topRated">Top Rated</Option>
      </Select>
      <Related />
      <GridContainer>
        {props.items.map((item: Item) => {
          return (
            <CardStore
              setItemToWatch={props.setItemToWatch}
              key={item.id}
              cardItem={item}
            />
          );
        })}
      </GridContainer>
    </div>
  );
};
