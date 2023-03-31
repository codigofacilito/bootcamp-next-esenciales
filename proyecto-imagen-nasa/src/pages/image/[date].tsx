import fetcher from "@next-js-bootcamp/utils/fetcher";
import { Image as ImageType } from "@next-js-bootcamp/types";

type ImageDateProps = {
   image: ImageType;
};

type StaticPropsParams = {
    params: any;
};

const ImageDate = ({ image }: ImageDateProps) => {
    return (
        <div>
            <h2>{image.title}</h2>
            <img src={image.url} alt={image.title} />
            <h3>{image.date}</h3>
            <p>{image.explanation}</p>
        </div>
    );
};

/*export async function getServerSideProps(ctx) {
    console.log(ctx.query.date);
    try {
        const image = await fetcher(`&date=${ctx.query.date}`);
        return {
            props: {
                image,
            },
        };
    } catch (error) {
        console.error(error);
    }
}*/

export async function getStaticProps({ params }: StaticPropsParams) {
    const { date } = params;

    try {
        const image = await fetcher(`&date=${date}`);
        return {
            props: {
                image,
            },
        };
    } catch (error) {
        console.error(error);
    }
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking',
    };
}

export default ImageDate;