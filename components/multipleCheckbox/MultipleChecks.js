import { useMemo, useState } from "react";
import styles from "./MultipleChecks.module.scss";

const MyCheckList = [
  {
    order: 0,
    name: "ABC",
    title:
      "LOREEMU XDJUNDN DN NDN LONDL  DN O D B KB < CQ< K , jvaad  khsdv cimn mhjv m zc zjklh",
  },
  {
    order: 1,
    name: "BCA",
    title:
      "LOREEMU XDJUNDN DN NDN LONDL  DN O D B KB < CQ< K , jvaad  khsdv cimn mhjv m zc zjklh",
  },
  {
    order: 2,
    name: "JHAY",
    title:
      "LOREEMU XDJUNDN DN NDN LONDL  DN O D B KB < CQ< K , jvaad  khsdv cimn mhjv m zc zjklh",
  },
  {
    order: 3,
    name: "PJKHB",
    title:
      "LOREEMU XDJUNDN DN NDN LONDL  DN O D B KB < CQ< K , jvaad  khsdv cimn mhjv m zc zjklh",
  },
  {
    order: 5,
    name: "SUHUSO",
    title:
      "LOREEMU XDJUNDN DN NDN LONDL  DN O D B KB < CQ< K , jvaad  khsdv cimn mhjv m zc zjklh",
  },
  {
    order: 6,
    name: "SUHUSO",
    title:
      "LOREEMU XDJUNDN DN NDN LONDL  DN O D B KB < CQ< K , jvaad  khsdv cimn mhjv m zc zjklh",
  },
  {
    order: 7,
    name: "SUHUSO",
    title:
      "LOREEMU XDJUNDN DN NDN LONDL  DN O D B KB < CQ< K , jvaad  khsdv cimn mhjv m zc zjklh",
  },
  {
    order: 8,
    name: "SUHUSO",
    title:
      "LOREEMU XDJUNDN DN NDN LONDL  DN O D B KB < CQ< K , jvaad  khsdv cimn mhjv m zc zjklh",
  },
];

const Checkbox = ({ obj, onChange }) => {
  return (
    <>
      <div className={styles.Checkbox}>
        <input
          type="checkbox"
          id={`custom-checkbox-${obj.index}`}
          name={obj.name}
          value={obj.checked}
          onChange={() => onChange({ ...obj, checked: !obj.checked })}
        />
        <label className={styles.name}>{obj.name}</label>
      </div>
      <div className={styles.text}>
        <p>{obj.title}</p>
      </div>
    </>
  );
};
const MultiChecks = () => {
  const [data, setData] = useState(
    MyCheckList.sort((a, b) => a.order - b.order)
  );

  const isVerified = useMemo(() => {
    return data.every((d) => d.checked);
  }, [data]);

  return (
    <>
    <div className={styles.main}>
      {data.map((obj, index) => (
        <li key={index}>
          <Checkbox
            obj={obj}
            onChange={(item) => {
              setData(data.map((d) => (d.order === item.order ? item : d)));
            }}
            />
        </li>
      ))}
    <div className={styles.inner}>
      <button
      className={styles.btn}
      disabled={!isVerified}>CHECKED BUTTON</button>
    </div>
    </div>
      </>
  );
};
export default MultiChecks;
