import Articles from ".";
import renderer from "react-test-renderer";
import { ContextWrapper } from "../../context/MainContext";

const mockData = {
  uri: "nyt://article/5b3ac615-1536-52b4-a1c3-ea3931b189e8",
  url: "https://www.nytimes.com/2024/03/27/well/colon-cancer-symptoms-treatment.html",
  id: 100000009368097,
  asset_id: 100000009368097,
  source: "New York Times",
  published_date: "2024-03-27",
  updated: "2024-03-28 09:33:37",
  section: "Well",
  subsection: "",
  nytdsection: "well",
  adx_keywords:
    "Colon and Colorectal Cancer;Colonoscopy;Disease Rates;Digestive Tract;Tests (Medical);Content Type: Service;Youth;Diet and Nutrition;American Cancer Society;United States",
  column: null,
  byline: "By Knvul Sheikh",
  type: "Article",
  title: "More Young People Than Ever Will Get Colorectal Cancer This Year",
  abstract:
    "Colon and rectal cancers are increasing among people younger than 50. Experts have a few ideas about why.",
  des_facet: [
    "Colon and Colorectal Cancer",
    "Colonoscopy",
    "Disease Rates",
    "Digestive Tract",
    "Tests (Medical)",
    "Content Type: Service",
    "Youth",
    "Diet and Nutrition",
  ],
  org_facet: ["American Cancer Society"],
  per_facet: [],
  geo_facet: ["United States"],
  media: [
    {
      type: "image",
      subtype: "photo",
      caption: "",
      copyright: "Jeannie Phan",
      approved_for_syndication: 1,
      "media-metadata": [
        {
          url: "https://static01.nyt.com/images/2024/03/27/well/27Well-Colon-Cancer/27Well-Colon-Cancer-thumbStandard.jpg",
          format: "Standard Thumbnail",
          height: 75,
          width: 75,
        },
        {
          url: "https://static01.nyt.com/images/2024/03/27/well/27Well-Colon-Cancer/27Well-Colon-Cancer-mediumThreeByTwo210.jpg",
          format: "mediumThreeByTwo210",
          height: 140,
          width: 210,
        },
        {
          url: "https://static01.nyt.com/images/2024/03/27/well/27Well-Colon-Cancer/27Well-Colon-Cancer-mediumThreeByTwo440.jpg",
          format: "mediumThreeByTwo440",
          height: 293,
          width: 440,
        },
      ],
    },
  ],
  eta_id: 0,
};

jest.mock("../../api/index.js", () => {
  return {
    fetchMostPopularArticles: async () => {
      return { results: [mockData] };
    },
  };
});
describe("Articles", () => {
  it("Articles with contextWrapper with default props", () => {
    const tree = renderer
      .create(
        <ContextWrapper>
          <Articles />
        </ContextWrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Articles snapshot returns details", () => {
    const tree = renderer
      .create(
        <ContextWrapper defaultResults={[mockData]} defaultSelectedArticle={0}>
          <Articles />
        </ContextWrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Articles snapshot returns null", () => {
    const tree = renderer
      .create(
        <ContextWrapper
          defaultResults={[mockData]}
          defaultSelectedArticle={null}
        >
          <Articles />
        </ContextWrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
