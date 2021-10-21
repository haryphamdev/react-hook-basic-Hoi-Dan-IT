import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';

const Covid = () => {

    const [dataCovid, setDataCovid] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    // componentDidMount
    useEffect(async () => {
        try {
            let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z')
            let data = (res && res.data) ? res.data : []; // true, false
            if (data && data.length > 0) {
                data.map(item => {
                    item.Date = moment(item.Date).format('DD/MM/YYYY');
                    return item;
                })
                data = data.reverse()
            }
            setDataCovid(data);
            setIsLoading(false);
            setIsError(false);
        }
        catch (e) {
            setIsError(true);
            setIsLoading(false);
        }

    }, []);

    return (
        <>
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