import React, { useEffect, useContext, useState } from "react";
import { Bar } from 'react-chartjs-2'
import { GlobalContext } from '../context/GlobalState'



//const randomInt = () => Math.floor(Math.random() * (10 - 1 + 1)) + 1;

const expenses = (arr) => {
    let obja = {}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].expenseText !== '') {
            var expenseText = arr[i].expenseText;

            obja[expenseText] = (obja[expenseText] || 0) + arr[i].expense

        }

    }
    return obja
}

const Chart = () => {

    const { transactions, getTransactions } = useContext(GlobalContext);
    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    var expenseObject = expenses(transactions);
    const xAxe = Object.keys(expenseObject)
    const yAxe = Object.values(expenseObject)

    return <Graph xAxe={xAxe} yAxe={yAxe} />
}



export const Graph = ({ xAxe, yAxe }) => {

    return (
        <div className="chart1">
            <Bar
                data={{
                    labels: xAxe,
                    datasets: [
                        {
                            label: "Expenses",
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
                    title: {
                        display: true,
                        text: 'Expense chart'
                    },
                    legend: {
                        display: true,
                        position: 'bottom'
                    },
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 10,
                                    beginAtZero: true,
                                    gridLines: {
                                        display: false
                                    }
                                }
                            }],

                        xAxes: [{
                            gridLines: {
                                display: false
                            }
                        }],
                    }


                }}
            />
        </div>);

}
export default Chart;