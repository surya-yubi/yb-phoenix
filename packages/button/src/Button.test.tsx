import React from "react";
import renderer from "react-test-renderer";

import MyButton from "./index";

test("renders correctly", () => {
  const tree = renderer
    .create(<MyButton text={"Test Button"} onPress={() => console.log("")} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
