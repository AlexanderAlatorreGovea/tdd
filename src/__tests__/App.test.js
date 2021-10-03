import App from "../App";
import { shallow } from "enzyme";
import { PersonList } from "../components/PersonList/PersonList";

import "../setupTests";

describe("<App />", () => {
  it("renders without crashing", () => {
    const appWrapper = shallow(<App />);
  });

  it("renders a person list", () => {
    const appWrapper = shallow(<App />);
    appWrapper.find(PersonList);

    expect(PersonList).toHaveLength(1);
  });
});
