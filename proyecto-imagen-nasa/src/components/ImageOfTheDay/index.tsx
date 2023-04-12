import { useRouter } from "next/router";
import { Image as ImageTypes } from "@next-js-bootcamp/types";
import Image from 'next/image'

import styles from './ImageOfTheDay.module.css';

console.log(process.env);

const ImageOfTheDay = ({ url, title, date }: ImageTypes) => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <Image 
                src={url || ""}
                alt={title || ""}
                onClick={() => router.push(`/image/${date}`)}
                className={styles.image}
                width={200}
                height={600} 
             />
            <h2>{title}</h2>
        </div>
    );
};

export default ImageOfTheDay;