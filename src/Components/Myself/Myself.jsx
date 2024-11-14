import Special from "../Special/Special";

const Myself = ({ asset }) => {
  return (
    <div>
      <h2>My self</h2>
      <section>
        <Special asset={asset}></Special>
      </section>
    </div>
  );
};

export default Myself;
