import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1000);

const Grandpa = () => {

    const [money , setMoney] = useState(1000)
  const asset = "Diamond";


  return (
    <div className="grandpa ">
      <h1>Grandpa</h1>
      <p>Net Money : {money}</p>

      <MoneyContext.Provider value={[money , setMoney]}>
        <AssetContext.Provider value="Gold">
          <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
