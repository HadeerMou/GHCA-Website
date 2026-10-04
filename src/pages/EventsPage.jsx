import { useEffect, useMemo, useState } from 'react';
import PageHero from '../components/PageHero';

const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' });
const fullDateFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

function dateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function nthWeekday(year, month, weekday, occurrence) {
  const first = new Date(year, month, 1);
  return new Date(year, month, 1 + ((weekday - first.getDay() + 7) % 7) + ((occurrence - 1) * 7));
}

function lastWeekday(year, month, weekday) {
  const last = new Date(year, month + 1, 0);
  return new Date(year, month, last.getDate() - ((last.getDay() - weekday + 7) % 7));
}

function eventsForMonth(year, month) {
  const events = [{
    id: `board-${year}-${month}`,
    date: nthWeekday(year, month, 3, 3),
    type: 'Board meeting',
    title: 'GHCA Board Meeting',
    time: '6:30 PM',
    location: 'Location posted with the agenda',
    description: 'Regular association business, issue updates, and time for resident participation.',
  }];

  if ([2, 5, 8, 11].includes(month)) {
    events.push({
      id: `cleanup-${year}-${month}`,
      date: nthWeekday(year, month, 6, 2),
      type: 'Volunteer event',
      title: 'Riverfront Community Cleanup',
      time: '9:00 AM',
      location: 'Meet-up location announced before the event',
      description: 'A seasonal stewardship morning along a designated part of the river corridor.',
    });
  }

  if (month % 2 === 0) {
    events.push({
      id: `hearing-${year}-${month}`,
      date: lastWeekday(year, month, 4),
      type: 'Public hearing watch',
      title: 'Planning & Agency Hearings',
      time: 'Time set by the public agency',
      location: 'Access details added when published',
      description: 'A calendar hold for public meetings related to development, flood control, infrastructure, or the environment.',
    });
  }

  return events.sort((a, b) => a.date - b.date);
}

function calendarCells(year, month) {
  const firstWeekday = new Date(year, month, 1).getDay();
  const firstCell = new Date(year, month, 1 - firstWeekday);
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(firstCell);
    date.setDate(firstCell.getDate() + index);
    return { date, currentMonth: date.getMonth() === month };
  });
}

export default function EventsPage() {
  const today = useMemo(() => new Date(), []);
  const [visibleMonth, setVisibleMonth] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const events = useMemo(
    () => eventsForMonth(visibleMonth.getFullYear(), visibleMonth.getMonth()),
    [visibleMonth],
  );
  const cells = useMemo(
    () => calendarCells(visibleMonth.getFullYear(), visibleMonth.getMonth()),
    [visibleMonth],
  );
  const [selectedDate, setSelectedDate] = useState(() => dateKey(eventsForMonth(today.getFullYear(), today.getMonth())[0].date));

  useEffect(() => {
    setSelectedDate(events[0] ? dateKey(events[0].date) : '');
  }, [events]);

  const selectedEvent = events.find(event => dateKey(event.date) === selectedDate);
  const moveMonth = amount => setVisibleMonth(current => new Date(current.getFullYear(), current.getMonth() + amount, 1));
  const showToday = () => setVisibleMonth(new Date(today.getFullYear(), today.getMonth(), 1));
  const selectDay = cell => {
    if (!cell.currentMonth) {
      setVisibleMonth(new Date(cell.date.getFullYear(), cell.date.getMonth(), 1));
    }
    setSelectedDate(dateKey(cell.date));
  };

  return <>
    <PageHero title="Events & Meetings" description="Stay connected with GHCA meetings, community events, and public hearings." variant="riverbank" />
    <section className="section section-soft"><div className="shell calendar-layout">
      <div className="calendar-column">
        <div className="calendar-box">
          <div className="calendar-head">
            <button className="calendar-nav" type="button" aria-label="Previous month" onClick={() => moveMonth(-1)}>‹</button>
            <h2 aria-live="polite">{monthFormatter.format(visibleMonth)}</h2>
            <button className="calendar-nav" type="button" aria-label="Next month" onClick={() => moveMonth(1)}>›</button>
          </div>
          <div className="calendar-week" aria-hidden="true">{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <span key={day}>{day}</span>)}</div>
          <div className="calendar-days" role="grid" aria-label={monthFormatter.format(visibleMonth)}>
            {cells.map(cell => {
              const key = dateKey(cell.date);
              const event = events.find(item => dateKey(item.date) === key);
              const isToday = key === dateKey(today);
              const isSelected = key === selectedDate;
              return <button
                type="button"
                role="gridcell"
                key={key}
                className={`${cell.currentMonth ? '' : 'muted'} ${event ? 'has-event' : ''} ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}`.trim()}
                aria-label={`${fullDateFormatter.format(cell.date)}${event ? `, ${event.title}` : ''}`}
                aria-pressed={isSelected}
                onClick={() => selectDay(cell)}
              ><span>{cell.date.getDate()}</span></button>;
            })}
          </div>
          <div className="calendar-footer"><span><i></i> Event scheduled</span><button type="button" onClick={showToday}>Today</button></div>
        </div>
        <p className="calendar-note">This working planning calendar shows recurring GHCA dates. Confirmed agendas, locations, and agency links can be added as they are published.</p>
      </div>

      <div className="events-column">
        <span className="eyebrow">Upcoming this month</span>
        <h2 className="section-title">Meetings and community events</h2>
        <p className="section-lead">Choose a marked day in the calendar or select an event below to see its details.</p>
        <div className="event-list-large">
          {events.map(event => {
            const key = dateKey(event.date);
            return <button type="button" className={`event-large ${selectedDate === key ? 'selected' : ''}`} key={event.id} onClick={() => setSelectedDate(key)}>
              <span className="event-large-date"><strong>{event.date.getDate()}</strong><span>{event.date.toLocaleDateString('en-US', { month: 'short' })}</span></span>
              <span className="event-large-copy"><small>{event.type}</small><strong>{event.title}</strong><span>{event.time}</span></span>
            </button>;
          })}
        </div>
        <div className="event-detail" aria-live="polite">
          {selectedEvent ? <><span className="eyebrow">Selected date</span><h3>{selectedEvent.title}</h3><p className="event-detail-date">{fullDateFormatter.format(selectedEvent.date)} · {selectedEvent.time}</p><p>{selectedEvent.description}</p><strong>{selectedEvent.location}</strong></> : <><span className="eyebrow">Selected date</span><h3>No event scheduled</h3><p>Select a marked date to view its meeting or event information.</p></>}
        </div>
      </div>
    </div></section>
  </>;
}
