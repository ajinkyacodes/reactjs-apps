import React from "react";
import Title from "../../components/Title";
import { AiFillSmile, AiFillHeart, AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import Photo from "./img/dog.jpg";

export default function LikePhotoApp() {
  let like=true;
  return (
    <div className="conatianer text-center">
      <Title text={"Like Photo App"} />
      <Title classes={"subtitle"} text={"Likes"} />
      <div
        className="card card-dark m-auto"
        style={{ width: 300, cursor: "pointor" }}
      >
        <div className="card-header fs-xl">
          <AiFillSmile className="mr-2" />
          <small>DogyDog</small>
        </div>
        <img src={Photo} alt="img" style={{ height: "fit-content" }} />
        <div
          className="card-footer fs-xl d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <AiOutlineComment />{" "}
          {like ? <AiFillHeart className="text-danger" /> : <AiOutlineHeart />}
        </div>
      </div>
    </div>
  );
}
