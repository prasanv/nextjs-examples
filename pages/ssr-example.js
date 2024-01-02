import ComponentTime from "../comps/componentTime"

export default function SSRExample({ dateTime }) {

  return (
    <main>
      <p>SSR-Example</p>
      <ComponentTime />
      <p>server side fetch = {dateTime} (API fetch on page refresh)</p>
    </main>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch("https://worldtimeapi.org/api/ip");
  const data = await res.json();
  // console.log(data);
  return {
    props: { dateTime: data.datetime },
  };
};
