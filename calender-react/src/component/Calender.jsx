import React from 'react';
import Event from './Event';
function Calender() {
  return (
    <div className="calender">
        <table>
            <tr>
                <th>Time</th>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th> 
                <th>Saturday</th>
                </tr>
                <tr>
                  <td>08:00 am</td>
                  <Event event='Group prayer ⛪' location = 'adams Avenue' color='green'  />
                  <Event/>
                  <Event/>
                  <Event event='Starbucks ☕️' location = '1250 drier circle'color ='green'/>
                  <Event/>
                  <Event/>
                  <Event event='Yolk 🍳' location = '1213 Thompson street' color ='green'/>              
                </tr>

                <tr>
                <td>09:00 am</td>
                 <Event/>
                  <Event/>
                  <Event event='Subway 🚊' location = '2311 sehawk avenue' color ='pink'/>
                  <Event/>
                  <Event event='The Bean 🫘'location = '2908 ethna blvd' color ='blue'/>
                  <Event/>
                  <Event/>
                </tr>
                <tr>
                <td>10:00 am</td>
                  <Event/>
                  <Event/>
                  <Event/>
                  <Event event='Attend football ⚽🏆' location = '1189 madison county street'color='blue'/>
                  <Event/>
                  <Event event='shopping 🛒🛍️' location = '7843 Maple avenue'color='pink'/>
                  <Event/>              
                </tr>
                <tr>
                <td>11:00 am</td>
                <Event/>
                  <Event event='Flight ✈️🛫' location = '5463 robin hood street'color='blue'/>
                  <Event/>
                  <Event/>
                  <Event/>
                  <Event/>
                  <Event/>
                </tr>
                <tr>
                <td>01:00 pm</td>
                <Event event='birthday party 🎂🎉 ' location = '2378 Sycamore street' color='pink'/>
                  <Event/>
                  <Event/>
                  <Event/>
                  <Event/>
                  <Event/>
                  <Event/>              
                </tr>
                <tr>
                <td>02:00 pm</td>
                <Event/>
                  <Event/>
                  <Event/>
                  <Event/>
                  <Event/>
                  <Event/>
                  <Event/>
                </tr>
                <tr>
                <td>03:00 pm</td>
                  <Event/>
                  <Event/>
                  <Event event='Hospital checkup 🏥' location = '3740 frankline street' color='pink'/>
                  <Event/>
                  <Event/>
                  <Event/>
                  <Event event='Fancy Dinner  🎩 ' location = '2341 doctors blvd' color ='green'/>
                </tr>
                
        </table>
    </div>
  )
}

export default Calender