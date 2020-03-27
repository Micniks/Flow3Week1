import React from "react";

const CountryTable = ({labels, countries}) => {

    const updateHeaders = () => {
      return labels.map(label => {
        return (
          <th key={label}>{label}</th>
        );
      });
    }

    const infoSize = (array) => {
      if(array.length > 1){
        return (<>(+{array.length - 1})</>);
      } else {
        return (<></>);
      }
    }

    const updateTableBody = () => {
      console.log(countries);
      return countries.map(c => {
        return (
          <tr key={c.name}>
            <td>{c.name}</td>
            <td>{c.capital}</td>
            <td>{c.region}</td>
            <td>{c.population}</td>
            <td>{c.area}</td>
            <td>{c.timezones[0]} {infoSize(c.timezones)}</td>
            <td>{c.borders[0]} {infoSize(c.borders)}</td>
            <td>{c.topLevelDomain[0]} {infoSize(c.topLevelDomain)}</td>
            <td>{c.currencies[0]} {infoSize(c.currencies)}</td>
            <td>{c.languages[0]} {infoSize(c.languages)}</td>
          </tr>
        );
      });
    }

    return (
      <div>
      <p>Replace the thead section with a row generated from the Labels endpoint</p>
      <p>Replace the tbody section with rows generated from the countries endpoint</p>
      <table className="table">
        <thead>
          <tr>
            {updateHeaders()}
          </tr>
        </thead>
        <tbody>
          {updateTableBody()}
        </tbody>
      </table>
      </div>
    );
};
export default CountryTable;