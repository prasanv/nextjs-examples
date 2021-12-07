export default function ISRExample({ dateTime }) {
  const d = new Date();
  const componentTime = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${d.getMilliseconds()}`;

  return (
    <main>
      <p>ISR-Example</p>
      <p> dateTime from componentTime ={componentTime}</p>
      <p> dateTime from server ={dateTime}</p>
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
