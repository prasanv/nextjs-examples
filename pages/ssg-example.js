import ComponentTime from "../comps/componentTime"

export default function SSGExample({ dateTime }) {

  return (
    <main>
      <p>SSG-Example</p>
      <ComponentTime />
      <p> server side fetch = {dateTime} (build time API fetch)</p>
    </main>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://worldtimeapi.org/api/ip");
  const data = await res.json();
  // console.log(data);
  return {
    props: { dateTime: data.datetime },
  };
};
