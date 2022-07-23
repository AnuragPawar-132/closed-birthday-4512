import React from "react";
import { Text } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";


const Social = () => {
  return (
    <div
      style={{
        padding: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Text fontSize="30px" fontWeight="500">
          Follow us @himalayausa
        </Text>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="https://www.instagram.com/himalayausa/">
            <BsInstagram size={"30px"} />
          </a>

          <a href="https://www.facebook.com/HimalayaUSA">
            <ImFacebook size={"30px"} />
          </a>
        </div>
      </div>

      <br />
      <br />
      <a href="https://www.instagram.com/himalayausa/">
        <div
          style={{
            display: "flex",
            width: "285px",
            height: "285px",
            gap: "10px",
          }}
        >
          <img
            src="https://scontent.cdninstagram.com/v/t51.2885-15/279060214_1028931348020017_977861928696093797_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=r9nhx1mTtc0AX8SZf9o&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8Q2kZ6FvzrPUgS-u19-jos94dhlaUoCBwWGVnZcGIXfA&oe=62E14707"
            alt=""
          />
          <img
            src="https://scontent.cdninstagram.com/v/t51.2885-15/277292932_5613162492028340_2851075865814001728_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=MJ31aavv5uUAX8IDs75&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8eq_rrYAWbWsM9vmb15GN0jh2zqkH4Bsm0Euwsagc-mg&oe=62DF844B"
            alt=""
          />
          <img
            src="https://scontent.cdninstagram.com/v/t51.2885-15/210602775_2989071524684964_2920882526894167214_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=fIejmsKYB2AAX8cPIw-&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8coevS33y790WBvLoo2lclgydZ_TYB9qTcoCax6bbhhg&oe=62E123C5"
            alt=""
          />
          <img
            src="https://scontent.cdninstagram.com/v/t51.2885-15/204274359_2975479076040360_2380187042423867081_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Mz0sGUCilL4AX9K6SOn&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_t4WQ0KizUjyT0RXuWdIaFemIAJ75ePU61WQJstvGy5g&oe=62DFAF2B"
            alt=""
          />
        </div>
      </a>
      
    </div>
  );
};

export default Social;
