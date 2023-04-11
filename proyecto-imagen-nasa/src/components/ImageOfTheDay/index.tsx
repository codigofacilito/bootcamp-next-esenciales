import { useRouter } from "next/router";
import { Image } from "@next-js-bootcamp/types";

import styles from './ImageOfTheDay.module.css';

const ImageOfTheDay = ({ url, title, date }: Image) => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <img src={url} alt={title} onClick={() => router.push(`/image/${date}`)} className={styles.image} />
            <h2>{title}</h2>
        </div>
    );
};

export default ImageOfTheDay;