import React from "react";
import PropTypes from "prop-types";

import { DEFAULT_PROPS } from "../../constants";
import { formatCurrency } from "../../utils";
import NumberSign from "./NumberSign";

import "./index.css";

const Table = ({ cryptocurrencyLabel, durationLabel, percentDifference, priceDifference, spotPrice }) => {
  const percentDifferenceFormatted = Number(Math.abs(percentDifference)).toFixed(2);
  const priceDifferenceFormatted = formatCurrency(Math.abs(priceDifference), DEFAULT_PROPS.CURRENCY);
  const spotPriceFormatted = formatCurrency(Math.abs(spotPrice), DEFAULT_PROPS.CURRENCY);
  const showOtherCells = Boolean(durationLabel);

  return (
    <div className="Table">
      <div className="TableCell">
        <div className="value">
          <span className="small-font">{spotPriceFormatted.slice(0, 1)}</span>
          <span className="large-font">{spotPriceFormatted.slice(1, -3)}</span>
          <span className="small-font">{spotPriceFormatted.slice(-3)}</span>
        </div>
        <div className="label">{cryptocurrencyLabel} price</div>
      </div>
      {showOtherCells && (
        <div className="TableCell">
          <div className="value">
            <NumberSign value={priceDifference} />
            <span className="small-font">{priceDifferenceFormatted.slice(0, 1)}</span>
            <span className="large-font">{priceDifferenceFormatted.slice(1, -3)}</span>
            <span className="small-font">{priceDifferenceFormatted.slice(-3)}</span>
          </div>
          <div className="label">
            {durationLabel} (${DEFAULT_PROPS.CURRENCY})
          </div>
        </div>
      )}
      {showOtherCells && (
        <div className="TableCell">
          <div className="value">
            <NumberSign value={percentDifference} />
            <span className="large-font">{percentDifferenceFormatted}</span>
            <span className="small-font">%</span>
          </div>
          <div className="label">{durationLabel} (%)</div>
        </div>
      )}
    </div>
  );
};

Table.propTypes = {
  cryptocurrencyLabel: PropTypes.string.isRequired,
  durationLabel: PropTypes.string.isRequired,
  percentDifference: PropTypes.number.isRequired,
  priceDifference: PropTypes.number.isRequired,
  spotPrice: PropTypes.number.isRequired
};

export default Table;