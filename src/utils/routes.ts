/**
 * Route definition file for the custom type API
 *
 * @exports
 */
export const slices = {
  index: "https://customtypes.prismic.io/slices",
  show: (slice: string) => `https://customtypes.prismic.io/slices/${slice}`,
  insert: "https://customtypes.prismic.io/slices/insert",
  update: "https://customtypes.prismic.io/slices/update"
}

export const types = {
  index: "https://customtypes.prismic.io/customtypes",
  show: (type: string) => `https://customtypes.prismic.io/customtypes/${type}`,
  insert: "https://customtypes.prismic.io/customtypes/insert",
  update: "https://customtypes.prismic.io/customtypes/update"
}

export default {
  slices,
  types
}
