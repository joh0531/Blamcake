import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { erDiagram } from '../../images'

export default withStyles(theme => ({
    stage1: {
        margin: theme.spacing.unit * 3
    }
}))(({ classes }) => (
    <div className={classes.stage1}>
        <Typography align="center" variant="display2">
            {'Blamcake - What\'s happening on ND\'s Campus?'}
        </Typography>
        <Typography align="center" variant="display1">
            DataBase Project Fall 2018 - Stage 1
        </Typography>
        <Typography variant="subheading">Group Members:</Typography>
        {['Maru Choi', 'Paul Kwak', 'Jewon Oh', 'Matthew Phelps'].map((member, i) => (
            <Typography key={i} variant="caption">{`• ${member}`}</Typography>
        ))}
        <Typography variant="title">Description</Typography>
        {['Mobile responsive event app that provides a filtered calendar of ND events based on user interest.'].map((bullet, i) => (
            <Typography key={i} variant="caption">{`• ${bullet}`}</Typography>
        ))}
        <Typography variant="title">Usefulness</Typography>
        {[
            'There is a calendar portion on the ND app that shows upcoming events. However, our app will be different in that it can display only events matching a variety of user interests (even multiple interests at once)',
            'Users may also submit their own events (they will be required to fill out ALL fields to provide robust information to other users)',
            'Users can see how many other users are attending an event or are subscribed to a calendar (i.e. series of events catered to an interest)'
        ].map((bullet, i) => (
            <Typography key={i} variant="caption">{`• ${bullet}`}</Typography>
        ))}
        <Typography variant="title">Realness</Typography>
        {[
            'There is an ND events API where we can see upcoming events.',
            'User-submitted events are not surprisingly provided by the user.'
        ].map((bullet, i) => (
            <Typography key={i} variant="caption">{`• ${bullet}`}</Typography>
        ))}
        <Typography variant="title">Functionality</Typography>
        <Typography variant="body2">Basic Functions</Typography>
        {[
            'insert/update events',
            'insert/update calendar',
            'insert/update user',
            'interact with ND event API',
            'query events based on particular calendar subscribed to'
        ].map((bullet, i) => (
            <Typography key={i} variant="caption">{`${i + 1}. ${bullet}`}</Typography>
        ))}
        <Typography variant="body2">Advanced Functions</Typography>
        {[
            'Add events to Google Calendar using Google API',
            'Keep track of attending users on each event',
            'Keep track of user subscribed to each calendar',
            'Customized email notifications based on calendars subscribed to, events attending, and email notification preferences'
        ].map((bullet, i) => (
            <Typography key={i} variant="caption">{`${i + 1}. ${bullet}`}</Typography>
        ))}
        <Typography variant="title">ER Diagram</Typography>
        <img src={erDiagram} alt="er diagram"/>
        <Typography variant="title">Diagram Description</Typography>
        <Typography variant="caption">
            {'Users has the attributes netid(varchar), password(varchar), and email(varchar), and attends Events. Users can also submit User Events. Events has the attributes id(int), all_day(boolean), created_at(varchar/date), location(varchar), start_at(varchar/date), end_at(varchar/date), content(varchar), title(varchar), image(link to image, varchar), url(link to event website, varchar), isFeatured(boolean). User Events is a Events and has the attributes club(varchar) and netid(varchar). ND Events is Events, and the data is parsed from the dataset from ND events website. Users can also subscribe to Calendars, which has the attributes category(char), length(int, number of hours). Calendars has Events. It also has Notification Preferences, which has the attributes email(varchar, email of user), regularity(varchar), timeofday(varchar, time).'}
        </Typography>
    </div>
))
