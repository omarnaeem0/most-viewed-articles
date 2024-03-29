import classNames from "classnames";
import Text from "../Text";
import styles from "./styles.module.scss";

function ArticleDetails({ data, setSelectedArticle }) {
  const image = data?.media?.[0]?.["media-metadata"]?.[2];

  return (
    <div className={styles.container}>
      <button
        className={styles.backButton}
        onClick={() => setSelectedArticle(null)}
      >
        <Text variant={"paragraph"}>Go back</Text>
      </button>
      <Text variant={"heading"}>{data.title}</Text>
      <Text variant={"title"} className={styles.marginBottom}>
        {data.abstract}
      </Text>

      <img className={styles.image} src={image.url} />
      <span className={styles.imageDetails}>
        <Text
          variant={"paragraph"}
          className={classNames(styles.caption, styles.inline)}
        >
          {data.media?.[0].caption}{" "}
        </Text>
        <Text variant={"paragraph"} className={styles.inline}>
          Pool photo by {data.media?.[0].copyright}
        </Text>
      </span>
      <div className={styles.articleLinkContainer}>
        <a className={styles.articleLink} href={data.url}>See full article</a>
      </div>
    </div>
  );
}

export default ArticleDetails;
