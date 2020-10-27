import React, { useEffect, useContext, useState } from "react";
import { Doughnut,Pie } from 'react-chartjs-2'
import { GlobalContext } from '../context/GlobalState'



//const randomInt = () => Math.floor(Math.random() * (10 - 1 + 1)) + 1;

const incomes = (arr) => {
    let obja = {}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].incomeText !== '') {
            var incomeText = arr[i].incomeText;

            obja[incomeText] = (obja[incomeText] || 0) + arr[i].income

        }

    }
    return obja
}

const Donut = () => {

    const { transactions, getTransactions } = useContext(GlobalContext);
    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    var incomeObject = incomes(transactions);
    const xAxe = Object.keys(incomeObject)
    const yAxe = Object.values(incomeObject)

    return <Graph xAxe={xAxe} yAxe={yAxe} />
}



export const Graph = ({ xAxe, yAxe }) => {

    return (
        <div className="chart">
            <Doughnut
                data={{
                    labels: xAxe,
                    datasets: [
                        {
                            label: "incomes",
                            data: yAxe,
                            backgroundColor: [
                                "rgba(255, 99, 132, 0.9)",
                                "rgba(54, 162, 235, 0.9)",
                                "rgba(255, 206, 86, 0.9)",
                                "rgba(75, 192, 192, 0.9)",
                                "rgba(153, 102, 255, 0.9)",
                                // "rgba(255, 159, 64, 0.2)"
                            ],
                            borderColor: [
                                "rgba(255, 99, 132, 1)",
                                "rgba(54, 162, 235, 1)",
                                "rgba(255, 206, 86, 1)",
                                "rgba(75, 192, 192, 1)",
                                "rgba(153, 102, 255, 1)",
                                // "rgba(255, 159, 64, 1)"
                            ],
                            borderWidth: 1,
                            hoverBorderWidth: 2,

                        }
                    ]
                }}

                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    title:{
                        display:true,
                        text:'Income chart'
                    },
                    legend: {
                        display: true,
                        position: 'bottom'
                    },

                }}
            />
        </div>);

}
export default Donut;