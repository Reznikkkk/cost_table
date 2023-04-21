import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

const Costs = (props) => {
  // const { costs } = props;
  // console.log(costs);

  const [selectedYear, setSelectedYear] = useState("2021");
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        {/* {costs.map((cost) => (
          <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
        ))} */}
        {/* {filteredCosts.length > 0 ? (
          filteredCosts.map((cost) => (
            <CostItem
              key={cost.id}
              date={cost.date}
              description={cost.description}
              amount={cost.amount}
            />
          ))
        ) : (
          <p>В этом году Расходов нет</p>
        )} */}
        <CostsDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};
export default Costs;
