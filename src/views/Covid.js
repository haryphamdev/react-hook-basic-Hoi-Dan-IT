import { useEffect, useState } from "react";
import useFetch from "../customize/fetch";
import moment from "moment";

const Covid = () => {
    const today = moment().startOf('day').toISOString(true);;
    const priorDate = moment().startOf('day').subtract(31, 'days').toISOString(true);

    const { data: dataCovid, isLoading, isError }
        // = useFetch('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z')
        = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`, true)


    return (
        < >
            <h3>Covid 19 tracking in VietNam:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>


                    {isError === false && isLoading === false && dataCovid && dataCovid.length > 0 &&
                        dataCovid.map(item => {
                            return (
                                <tr key={item.ID}>
                                    <td>{item.Date}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Active}</td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovered}</td>
                                </tr>
                            )
                        })
                    }

                    {isLoading === true
                        && <tr >
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>  Loading...</td>
                        </tr>
                    }


                    {isError === true
                        && <tr >
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>  Something wrong... </td>
                        </tr>
                    }

                </tbody>

            </table>
        </>
    )
}

export default Covid;