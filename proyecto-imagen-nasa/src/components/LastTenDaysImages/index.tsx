import { useRouter } from "next/router";
import { Image } from "@next-js-bootcamp/types";

type LastTenDaysImagesProps = {
    images: Image[];
};

const LastTenDaysImages = ({ images }: LastTenDaysImagesProps) => {
    const router = useRouter();

    return (
        <div>
            <h2>Ultimos 10 dias</h2>
            {images?.map((image, index) => (
                <div key={`last-10-day-image-${image.title}`}>
                    <img src={image.url} alt={image.title} onClick={() => router.push(`/image/${image.date}`)} />
                    <h2>{image.title}</h2>
                </div>
            ))}
        </div>
    );
};

export default LastTenDaysImages;