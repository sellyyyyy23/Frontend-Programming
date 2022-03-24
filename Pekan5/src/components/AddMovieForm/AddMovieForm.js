import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>

        <div className={styles.hero__left}>
        <img
            className={styles.hero__image}
            src="https://picsum.photos/536/354"
            alt="placeholder"
          />
        </div>

        <div className="hero__right">
        <h2 className={styles.hero__title}>ADD MOVIES</h2>
            <form>
                <label>Title</label><br />
                <input className = {styles.hero__input} type="text" id="Title" name="Judul" value="Masukan Judul" /><br />
                <label>Year</label><br />
                <input className = {styles.hero__input} type="text" id="Year" name="Tahun" value="Masukan Tahun" /><br />
           </form><br/>
          <button className={styles.hero__button}>Cari</button>
        </div>

      </section>
    </div>
  );
}

export default AddMovieForm;