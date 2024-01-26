import React from "react";
import styles from "./index.module.css";
import {
  getDescriptionFormat,
  getNameFormat,
  getPriceFormat,
  getPurchaseDateFormat,
} from "./utils";
import { Props, Result } from "./types";

export const TableView = ({ results }: Props) => {
  const getDynamicStyle = (category: string) => {
    let dynamicStyle = {};

    switch (category.toLowerCase()) {
      case "travel":
      case "automotive":
        dynamicStyle = {
          color: "#D9412F",
          borderColor: "#FF8577",
        };
        break;
      case "food":
      case "entertainment":
        dynamicStyle = {
          color: "#2E5AAC",
          borderColor: "#809ACF",
        };
        break;
      case "apparel":
      case "footwear":
        dynamicStyle = {
          color: "#108632",
          borderColor: "#98D4A9",
        };
        break;
      case "technology":
        dynamicStyle = {
          color: "#000000",
          borderColor: "#CDCED9",
        };
        break;
      default:
    }

    return dynamicStyle;
  };

  return (
    <table>
      <caption className={styles.title}>Purchases</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Purchase Date</th>
          <th className={styles.categoryContainer}>Category</th>
          <th>Description</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {results &&
          results.map((result: Result) => (
            <tr key={result.id}>
              <th>
                <strong>
                  <p>{getNameFormat(result.name)}</p>
                </strong>
              </th>
              <td>
                <img
                  alt="location"
                  width="40"
                  height="40"
                  src={result.location}
                />
              </td>
              <td>
                <p className={styles.purchaseDate}>
                  {getPurchaseDateFormat(result.purchaseDate)}
                </p>
              </td>
              <td className={styles.categoryContainer}>
                <div
                  className={styles.category}
                  style={getDynamicStyle(result.category)}
                >
                  <strong>{result.category}</strong>
                </div>
              </td>
              <td>
                <p className={styles.description}>
                  {getDescriptionFormat(result.description)}
                </p>
              </td>
              <td>
                <strong>{getPriceFormat(result.price)}</strong>
              </td>
              <td>
                <i
                  className="fa fa-ellipsis-v"
                  style={{ fontSize: "20px", color: "#6B6C7E" }}
                ></i>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
