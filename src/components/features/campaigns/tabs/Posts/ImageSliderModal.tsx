import { Dialog } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

interface ImageSliderModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialSlide: number;
}

export default function ImageSliderModal({
  isOpen,
  onClose,
  images,
  initialSlide,
}: ImageSliderModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-3xl rounded bg-white p-4">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            initialSlide={initialSlide}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center">
                  <Image
                    src={image}
                    alt={`Post image ${index + 1}`}
                    width={800}
                    height={600}
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}