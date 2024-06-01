import { Link } from "react-router-dom";
import Image from "../../assets/banner.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
function Banner() {
    return (
        <>
            <div>
                <>
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        style={{ width: "100%" }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="flex flex-col-reverse md:flex-row items-center gap-10 container mx-auto mt-10">
                                <div>
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
                                        Join Now As <br />{" "}
                                        <span className="text-primary underline cursor-pointer">
                                            HR Manager
                                        </span>{" "}
                                        to upload your own asste.
                                    </h1>

                                    <Link to={"/joinAsHRManager"}>
                                        <button className="text-xl md:text-2xl font-bold border py-2 px-4 rounded-md text-primary border-primary transition-all ease-in hover:text-secondary hover:bg-primary">
                                            Join Now
                                        </button>
                                    </Link>
                                </div>

                                <div className="w-1/2 h-full">
                                    <img
                                        className="w-full h-full"
                                        src={Image}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex items-center gap-10 container mx-auto mt-10">
                                <div>
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
                                        Join Now As <br />{" "}
                                        <span className="text-primary underline cursor-pointer">
                                            Employee
                                        </span>{" "}
                                        to make your team and join to them.
                                    </h1>

                                    <Link to={"/joinAsEmployee"}>
                                        <button className="text-xl md:text-2xl font-bold border py-2 px-4 rounded-md text-primary border-primary transition-all ease-in hover:text-secondary hover:bg-primary">
                                            Join Now
                                        </button>
                                    </Link>
                                </div>

                                <div className="w-1/2 h-full">
                                    <img
                                        className="w-full h-full"
                                        src={Image}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </>
            </div>
        </>
    );
}

export default Banner;
