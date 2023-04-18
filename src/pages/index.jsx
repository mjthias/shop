export default function Home({ data }) {
    return <h1>eh</h1>;
}

export async function getServerSideProps() {
    const res = await fetch("https://kea-alt-del.dk/t7/api/products");
    const data = await res.json();
    console.log(data);

    return {
        props: {
            data: "data",
        },
    };
}
