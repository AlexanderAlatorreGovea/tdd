import Temperature from "./Temperature";
import { shallow } from "enzyme";

it("adds correctly", () => {
  const wrapper = shallow(
    <Temperature temp={10} city="Toronto" toggleForecast={() => {}} />
  );

  expect(wrapper).toMatchSnaptshot();
});
