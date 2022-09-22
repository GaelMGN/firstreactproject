import styles from "../styles/Home.module.css";
import Header from "./Header";
import NewProduct from "./NewProduct";
import Products from "./Products";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Header />
        <NewProduct />
        <Products />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
