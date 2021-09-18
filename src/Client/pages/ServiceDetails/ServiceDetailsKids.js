import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ServiceCard from "../../components/Card/ServiceCard";
import Footer from "../HomePage/Footer";
import { Scrollbars } from "react-custom-scrollbars";
import ServiceCategorySelectBut from "../../components/buttons/ServiceCategorySelectBut";
import ServiceImage from "../../images/services/salon working-01.png";
import { getAllServices } from "../../../actions/service";
import ServiceCardTopic from "../../components/Card/ServiceCardTopic";

export default function ServiceDetailsKids() {
  const dispatch = useDispatch();
  // const [ispoup, setIspopup] = useState(false);
  useEffect(() => {
    dispatch(getAllServices());
  }, []);

  return (
    <>
      <div className="md:h-full lg:h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-6">
        {/* <!--Card 1--> */}
        <div className="border-r border-gray-200 flex flex-col">
          <ServiceCategorySelectBut
            content="Hair"
            BaseUrl="ServiceDetailsKids"
          />
          <ServiceCategorySelectBut
            content="Skin"
            BaseUrl="ServiceDetailsKids"
          />
          <ServiceCategorySelectBut
            content="Face"
            BaseUrl="ServiceDetailsKids"
          />
        </div>
        {/* <!--Card 2--> */}
        <div className="border-r border-gray-200 ">
          <Scrollbars style={{ height: 800 }}>
            <ServiceCard />
            <ServiceCard />
            <ServiceCardTopic Topic="Face" />
            <ServiceCard />
            <ServiceCard />
            <ServiceCardTopic Topic="Hair" />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCardTopic Topic="Skin" />
            <ServiceCard />
          </Scrollbars>{" "}
        </div>

        {/* <!--Card 3--> */}
        <div className="border-r border-gray-200">
          <img className="pt-44" src={ServiceImage} />
        </div>
      </div>
      <Footer />
    </>
  );
}