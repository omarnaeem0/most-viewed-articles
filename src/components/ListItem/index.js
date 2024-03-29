import styles from "./styles.module.scss";

export default function ListItem({ item }) {
  return (
    <li className={styles.listItem}>
      <span className={styles.date}>{item.published_date}</span>
      <div className={styles.content}>
        <div className={styles.details}>
          <p className={styles.section}>{item.section}</p>
          <h4 className={styles.title}>{item.title}</h4>
          <p className={styles.abstract}>{item.abstract}</p>
          <p className={styles.byline}>{item.byline}</p>
        </div>
        <figure className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <img src={item?.media?.[0]?.['media-metadata']?.[1]?.url}/>
          </div>
        </figure>
      </div>
    </li>
  );
}
