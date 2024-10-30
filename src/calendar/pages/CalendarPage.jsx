

import {CalendarEvent, CalendarModal, Navbar} from '../'
import {addHours} from 'date-fns'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import {Calendar } from "react-big-calendar";
import {localizer, getMessagesEs} from '../../helpers'
import {useState} from "react";






const events = [{
    title: 'Cumpleaños del jefe',
    notes: 'Hay que comprar un pastel',
    start: new Date(),
    end: addHours(new Date(), 2),
    byColkor: '#fafafa'
}]



export const CalendarPage = () => {

const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week' )


    const eventStyleGetter = (event, start, end, isSelected) => {


        const style = {
            backgroundColor: '#347cf7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white'
        }

    return {
        style
    }
    }

    const onDoubleClick = (event) => {
        console.log({onDoubleClick: event})
    }

    const onSelect = (event) => {
        console.log({Click: event})
    }

    const onViewChanged = (event) => {
       localStorage.setItem('lastView', event)

    }




    return <>
        <Navbar/>

        <Calendar
            culture='es'
            localizer={localizer}
            events={events}
            defaultView={lastView}
            startAccesssor="start"
            endAccessor="end"
            style={{height: 'calc( 100vh - 80px)'}}
            messages={getMessagesEs()}
            eventPropGetter={eventStyleGetter}
            components={{
                event: CalendarEvent
            }}
            onDoubleClickEvent={onDoubleClick}
            onSelectEvent={onSelect}
            onView={onViewChanged}
        />

        <CalendarModal/>
    </>;

};



