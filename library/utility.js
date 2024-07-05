export const currencyFormatter = (amount) => {
    const value= Intl.NumberFormat("en-US",{
        currency:"USD",
        style:"currency",
    });
    return value.format(amount);
};