import React from "react";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  const params = useParams();
  const { touristRouteId } = useParams();
  // console.log(params);
  return <h1>路游路线详情页面, 路线ID:{touristRouteId} </h1>;
}
