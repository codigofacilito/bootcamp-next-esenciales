import fetcher from "@next-js-bootcamp/utils/fetcher";
import ImageOfTheDay from "@next-js-bootcamp/components/ImageOfTheDay";
import LastTenDaysImages from "@next-js-bootcamp/components/LastTenDaysImages";
import { Image } from "@next-js-bootcamp/types";

type HomeProps = {
  imageOfTheDay: Image;
  last10DaysImages: Image[];
};

export default function Home({ imageOfTheDay, last10DaysImages }: HomeProps) {
  return (
    <div>
      <ImageOfTheDay {...imageOfTheDay} />
      <LastTenDaysImages images={last10DaysImages} />
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const imageOfTheDay = await fetcher();
    const last10DaysImages = await fetcher('&start_date=2023-03-01&end_date=2023-03-10');

    return {
      props: {
        imageOfTheDay,
        last10DaysImages,
      }
    }
  } catch (error) {
    console.error(error);
  }
}