export default function SSRExample({ dateTime }) {
  const d = new Date();
  const componentTime = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${d.getMilliseconds()}`;

  return (
    <main>
      <p>SSR-Example</p>
      <p> dateTime from componentTime ={componentTime}</p>
      <p> dateTime from server ={dateTime}</p>
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
