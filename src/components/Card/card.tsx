import React from "react";
import { Button, Card, Rate } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { Item } from "../../types/types";

const { Meta } = Card;

export const CardStore = (props: {
  cardItem: Item;
  key: string;
  setItemToWatch: Function;
}) => {
  const item = props.cardItem;

  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={item.picture} />}
      >
        <Meta title={item.name} />
        <Meta title={`${item.price}$`} description={item.description} />
        <div>
          <div>
            <Rate disabled defaultValue={item.rate} />
            <span className="ant-rate-text">{item.rate}</span>
          </div>
          <Button
            onClick={() => props.setItemToWatch(item)}
            icon={<HeartOutlined />}
            size={"small"}
          >
            Watch
          </Button>
        </div>
      </Card>
    </>
  );
};
