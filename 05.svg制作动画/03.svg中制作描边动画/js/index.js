export const getPathLength = (context, selector) => {
  const el = context.querySelector(selector);
  const length = el.getTotalLength();
  console.log(`${selector}'s lenght is ${length}`);
};
