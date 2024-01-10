import StatusEvents from "../components/statusEvents";
import UserStatus from "../components/userStatus";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.statusContainer}>
          <UserStatus />
        </div>
        <h3>Status Feed:</h3>
        <StatusEvents />
      </div>
    </main>
  );
};

export default Home;
