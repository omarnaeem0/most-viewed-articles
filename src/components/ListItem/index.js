import Text from "../Text";
import styles from "./styles.module.scss";

export default function ListItem({ item, index, onClick }) {
  const image = item?.media?.[0]?.["media-metadata"]?.[1];
  return (
    <li className={styles.listItem} onClick={() => onClick(index)}>
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
        {image && (
          <figure className={styles.imageSection}>
            <img src={image?.url} height={image.height} width={image.width} />
          </figure>
        )}
      </div>
    </li>
  );
}
