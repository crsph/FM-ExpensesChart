import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import logo from "../public/logo.svg";
import BarStatistic from "../components/BarStatistic";
import { getMonthlySpending, MonthlySpending } from "../utils/BalanceGenerator";
import { useContext } from "react";
import ExpenseContext from "../components/ContextObject";

export default function Home({ monthlySpending }) {
  // const [monthlyExpense, setMonthlyExpense] = useContext(ExpenseContext);
  // console.log(monthlySpending);

  return (
    <div className={styles["container"]}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles["main"]}>
        <div className={styles["my-balance-container"]}>
          <div className={styles["inner-balance-container"]}>
            <p className={styles["inner-balance-container__label"]}>
              My balance
            </p>
            <p className={styles["inner-balance-container__balance"]}>
              $1000.00
            </p>
          </div>
          <Image src={logo} alt="#" />
        </div>

        <div className={styles["stat-container"]}>
          <p className={styles["stat-container__label"]}>
            Spending - Last 7 days
          </p>

          <BarStatistic spending={monthlySpending.props.randomAmount} />

          <hr />

          <div className={styles["monthly-summary-container"]}>
            <div className={styles["monthly-amount-container"]}>
              <p className={styles["monthly-amount-container__label"]}>
                Total this month
              </p>
              <p className={styles["monthly-amount-container__amount"]}>
                ${monthlySpending.props.randomAmount}
              </p>
            </div>
            <div className={styles["monthly-percentage-container"]}>
              <p className={styles["monthly-percentage-container__percentage"]}>
                +2.4%
              </p>
              <p className={styles["monthly-percentage-container__label"]}>
                fromt last month
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles["footer"]}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const monthlySpending = await getMonthlySpending();

  return {
    props: {
      monthlySpending,
    },
  };
}
