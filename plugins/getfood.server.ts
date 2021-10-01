export default async ({ store }) => {
  await store.dspatch("getFoodData");
};
