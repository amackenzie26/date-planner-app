import React, { useState, useEffect } from 'react';
import Date from '../components/Date';
import { getAllDates } from '../utils/api';

const Dashboard = () => {

    const [dates, setDates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllDates();
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
                                return <Date title={date.title} message={date.message} />
                            })
                        }
                    </div>
                </div>

            </div>
        
        </div>
    )

}

export default Dashboard;