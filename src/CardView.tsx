import React from "react";
import styles from "./index.module.css";
import {
  getDescriptionFormat,
  getNameFormat,
  getPriceFormat,
  getPurchaseDateFormat,
} from "./utils";
import { Props, Result } from "./types";

export const CardView = ({ results }: Props) => {
  return (
    <div className={styles.cardViewContainer}>
      <h1 className={styles.title}>Purchases</h1>
      {results.map((result: Result) => (
        <div className={styles.cardContainer} key={result.id}>
          <div className={styles.card}>
            <div className={styles.cardNameLogoContainer}>
              <img
                width="40"
                height="40"
                alt="location"
                src={result.location}
              />
              <div>{getNameFormat(result.name)}</div>
            </div>
            <div className={styles.priceContainer}>
              <div>{getPriceFormat(result.price)}</div>
            </div>
          </div>
          <div className={styles.card}>
            <p className={styles.description}>
              {getDescriptionFormat(result.description)}
            </p>
          </div>
          <div className={styles.purchaseDateContainer}>
            <div>
              <strong>Purchase Date</strong>
            </div>
            <div>{getPurchaseDateFormat(result.purchaseDate)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
