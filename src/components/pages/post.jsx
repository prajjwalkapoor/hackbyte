import React from "react";
import { useParams } from "react-router-dom";
export default function Post() {
  let { post } = useParams();
  return <div>Post - {post}</div>;
}
