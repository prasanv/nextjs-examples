import ComponentTime from "../comps/componentTime"

export default function ISRExample({ dateTime }) {
  const d = new Date();

  return (
    <main>
      <p>ISR-Example</p>
      <ComponentTime />
      <p>server side fetch = {dateTime} (incremental API fetch)</p>
    </main>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://worldtimeapi.org/api/ip");
  const data = await res.json();
  // console.log(data);
  return {
    props: { dateTime: data.datetime },
    revalidate: 60,
  };
};
