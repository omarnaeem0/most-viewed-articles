import Text from "../Text";
import styles from "./styles.module.scss";

export default function ListItem({ item }) {
  return (
    <li className={styles.listItem}>
      <Text variant={"date"} className={styles.date}>
        {item.published_date}
      </Text>
      <div className={styles.content}>
        <div className={styles.details}>
          <Text variant={"section"}>{item.section}</Text>
          <Text variant={"title"}>{item.title}</Text>
          <Text variant={"paragraph"}>{item.abstract}</Text>
          <Text variant={"cta"}>{item.byline}</Text>
        </div>
        <figure className={styles.imageSection}>
          <img src={item?.media?.[0]?.["media-metadata"]?.[1]?.url} />
        </figure>
      </div>
    </li>
  );
}
