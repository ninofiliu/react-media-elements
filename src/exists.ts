export default <T>(value: T | null | undefined): T => {
  if (value == null) throw new Error("Should not be null");
  return value;
};
