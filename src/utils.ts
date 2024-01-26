const getPurchaseDateFormat = (isoString: string) => {
  const isoDate = new Date(isoString); // Create a Date object from the ISO string

  const formattedDate = isoDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
};

const getDescriptionFormat = (str: string) => {
  return (
    str.charAt(0).toUpperCase() +
    // eslint-disable-next-line no-useless-concat
    str.slice(1).replace(new RegExp("&" + "#" + "x27;", "g"), "'")
  );
};

const getPriceFormat = (price: number) => {
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return USDollar.format(price);
};

function getNameFormat(sentence: string) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export {
  getPurchaseDateFormat,
  getDescriptionFormat,
  getPriceFormat,
  getNameFormat,
};
