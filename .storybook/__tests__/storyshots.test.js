import initStoryshots from "@storybook/addon-storyshots";
import { multiSnapshotWithOptions } from "@storybook/addon-storyshots/dist/test-bodies";
import styleSheetSerializer from "jest-styled-components/src/styleSheetSerializer";
import { addSerializer } from "jest-specific-snapshot";

jest.mock("react-dom", () => ({
  createPortal: node => node
}));

addSerializer(styleSheetSerializer);

initStoryshots({
  framework: "react",
  test: multiSnapshotWithOptions({})
});
