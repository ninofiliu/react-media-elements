export default (value) => {
    if (value == null)
        throw new Error("Should not be null");
    return value;
};
