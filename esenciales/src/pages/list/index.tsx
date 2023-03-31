const List = ({ users }: any) => {
    console.log(users, 10);

    return (
        <div>
            Users list
        </div>
    );
};

export async function getStaticProps() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();

        return {
            props: {
                users: result,
            },
        };
    } catch (error) {
        console.error(error);
        return {};
    }
}

export default List; // /list