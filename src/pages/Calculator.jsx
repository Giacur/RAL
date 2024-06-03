import { useEffect, useState } from "react";
import HeaderImage from "../components/HeaderImage";
import JollyButton from "../components/JollyButton";
import SectionTitle from "../components/SectionTitle";
import calculateFunction from "../util/calculateFunction";

const Calculator = () => {
  const [data, setData] = useState({
    amount: null,
    period: null,
  });

  const [results, setResults] = useState(null);

  const changeDataHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (data.amount && data.period) {
      setResults(calculateFunction(data.amount, data.period));
    }
  }, [data]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <HeaderImage />
      <div className="container mx-auto flex flex-col items-center py-5">
        <SectionTitle title="Inserisci le informazioni richieste" />

        <div className="mt-16 w-3/4 flex flex-col items-start gap-2">
          <form onSubmit={onSubmitHandler} className="w-full sm:grid sm:grid-cols-1 xl:flex gap-3">
            <div className="xl:w-1/2 mb-5 xl:mb-0">
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <i className="fa-solid fa-euro-sign"></i>
                </span>
                <input
                  type="number"
                  name="amount"
                  id="website-admin"
                  className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Amount/Totale"
                  onInput={changeDataHandler}
                  value={data.amount ? data.amount : ""}
                />
              </div>
            </div>

            <div className="xl:w-1/2 flex items-center gap-2">
            <span><i className="fa-regular fa-calendar-days text-2xl text-slate-400"></i></span>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="period"
                onChange={changeDataHandler}
                value={data.period ? data.period : ""}
              >
                
                <option value="">Mensilità</option>
                <option value={12}>12</option>
                <option value={13}>13</option>
                <option value={14}>14</option>
              </select>
            </div>
          </form>
        </div>


        {data.amount > 0 && data.period > 0 && (
          <div className="container mx-auto mt-20 w-3/4">
            {results && (
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        IRPEF
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Total Salary
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Monthly Salary
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="px-6 py-4"><span className="sm:hidden xl:inline-block">€</span> {results.irpef}</td>
                      <td className="px-6 py-4"><span className="sm:hidden xl:inline-block">€</span> {results.salary}</td>
                      <td className="px-6 py-4"><span className="sm:hidden xl:inline-block">€</span> {results.monthlySalary}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Calculator;
