import React from "react";
import "../changes/css/linechart.css"
import { DateRangePicker, Stack } from 'rsuite';
import {
    ResponsiveContainer,
    AreaChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Area,
} from "recharts";
import img from "/Chart.png"

import { ChartTooltip } from "../../components/dashboard/ChartTooltip";
import { IChartDatum } from "../../interfaces";

type TResponsiveAreaChartProps = {
    kpi: string;
    data: IChartDatum[];
    colors: {
        stroke: string;
        fill: string;
    };
};

export const ResponsiveAreaChart = ({
    kpi,
    data,
    colors,
}: TResponsiveAreaChartProps) => {
    return (
        // <ResponsiveContainer height={400}>
        //     <AreaChart
        //         data={data}
        //         height={400}
        //         margin={{
        //             top: 10,
        //             right: 30,
        //             left: 0,
        //             bottom: 0,
        //         }}
        //     >
        //         <CartesianGrid strokeDasharray="0 0 0" />
        //         <XAxis
        //             dataKey="date"
        //             tickCount={data?.length ?? 0}
        //             tick={{
        //                 stroke: "light-grey",
        //                 strokeWidth: 0.5,
        //                 fontSize: "12px",
        //             }}
        //         />
        //         <YAxis
        //             tickCount={13}
        //             tick={{
        //                 stroke: "light-grey",
        //                 strokeWidth: 0.5,
        //                 fontSize: "12px",
        //             }}
        //             interval="preserveStartEnd"
        //             domain={[0, "dataMax + 10"]}
        //         />
        //         <Tooltip
        //             content={<ChartTooltip kpi={kpi} colors={colors} />}
        //             wrapperStyle={{
        //                 backgroundColor: "rgba(0, 0, 0, 0.7)",
        //                 border: "0 solid #000",
        //                 borderRadius: "10px",
        //             }}
        //         />
        //         <Area
        //             type="monotone"
        //             dataKey="value"
        //             stroke={colors?.stroke}
        //             strokeWidth={3}
        //             fill={colors?.fill}
        //             dot={{
        //                 stroke: colors?.stroke,
        //                 strokeWidth: 3,
        //             }}
        //         />
        //     </AreaChart>
        // </ResponsiveContainer>
        
        <div className="outer-border">
            <DateRangePicker />
            <br />
            <br />
            <div className="top-container">
               <div className="first">
                    <div>
                    <p>Online store sessions</p>
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                    </span>
                    </div>
                    <p>255,581 <span>^9%</span></p>
               </div>
               <div>
                    <div>
                    <p>Net return value</p>
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                    </span>
                    </div>
                    <p>-$15,07.44 <span>^14%</span></p>
               </div>
               <div>
                    <div>
                    <p>Total orders</p>
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                    </span>
                    </div>
                    <p>10,511 <span>^2%</span></p>
               </div>
               <div>
                    <div>
                    <p>Conversion rate</p>
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                    </span>
                    </div>
                    <p>3.18% <span>^7%</span></p>
               </div>
            </div>
            {/* char */}
            
            
            <div className="middle-container">
                <img src={img} alt="char.png" />
            </div>

            <div className="last-container">
                <div>
                    <p><span>-</span>Oct 1, 2022 - Feb21, 2024</p>
                </div>
                <div>
                    <p><span>-</span>Oct 1, 2022 - Feb21, 2024</p>
                </div>
            </div>
        </div>
        
        
    );
};
