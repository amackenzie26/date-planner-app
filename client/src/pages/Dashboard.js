import React, { useState, useEffect } from 'react';
import Date from '../components/Date';
import { getDate, getAllDates } from '../utils/api';
import Auth from '../utils/auth';

const Dashboard = () => {

    const [dates, setDates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                var id = Auth.getUser().data._id;
                console.log(Auth.getUser().data._id)
                const res = await getDate(id);
                if (!res.ok) {
                    throw new Error('No list of Dates');
                }
                const datesList = await res.json();
                setDates(datesList);
            } catch (err) {
                console.error(err);
            }
        }

        fetchData();
    }, [])

    return (
        <div>
            <div class="dashboard-container">
                <div class="favorites-container">
                    <h2 class="favorites">Dates</h2>
                    <div class="flex-row dates">
                        {
                            dates.map(date => {
                                return <Date title={date.title} message={date.message} date={date.date} activity={date.activity} />
                            })
                        }
                    </div>
                </div>

            </div>
        
        </div>
    )

}

export default Dashboard;