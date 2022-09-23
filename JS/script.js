let set_hrs_12_hrs_format = (date_obj) => {
    let hrs_in_12_hrs_format = date_obj.getHours();

    if (hrs_in_12_hrs_format > 12) {
        hrs_in_12_hrs_format -= 12;
    }

    else if (hrs_in_12_hrs_format == 0) {
        hrs_in_12_hrs_format = 12;
    }

    if (hrs_in_12_hrs_format / 10 < 1) {
        hrs_in_12_hrs_format = "0" + hrs_in_12_hrs_format;
    }

    return hrs_in_12_hrs_format;
}

let set_mins_two_digs_format = (date_obj) => {
    let mins_in_two_digs_format = date_obj.getMinutes();

    if (mins_in_two_digs_format / 10 < 1) {
        mins_in_two_digs_format = "0" + mins_in_two_digs_format;
    }

    return mins_in_two_digs_format;
}

let set_secs_two_digs_format = (date_obj) => {
    let secs_in_two_digs_format = date_obj.getSeconds();

    if (secs_in_two_digs_format / 10 < 1) {
        secs_in_two_digs_format = "0" + secs_in_two_digs_format;
    }

    return secs_in_two_digs_format;
}

let set_month_in_words = (date_obj) => {
    const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let month_in_words = months[date_obj.getMonth()];
    return month_in_words;
}

let set_day_in_words = (date_obj) => {
    const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let day_in_words = days[date_obj.getDay()];
    return day_in_words;
}


let set_time = () => {
    let date_obj = new Date();

    let hrs = document.getElementsByClassName("hours")[0];
    hrs.innerHTML = set_hrs_12_hrs_format(date_obj);

    let mins = document.getElementsByClassName("minutes")[0];
    mins.innerHTML = set_mins_two_digs_format(date_obj);

    let secs = document.getElementsByClassName("seconds")[0];
    secs.innerHTML = set_secs_two_digs_format(date_obj);

    let month = document.getElementsByClassName("month")[0];
    month.innerHTML = set_month_in_words(date_obj);

    let date = document.getElementsByClassName("date")[0];
    date.innerHTML = date_obj.getDate();

    let year = document.getElementsByClassName("year")[0];
    year.innerHTML = date_obj.getFullYear();

    let day = document.getElementsByClassName("day")[0];
    day.innerHTML = set_day_in_words(date_obj);

    let set_phase = document.getElementsByClassName("seconds")[0];

    (date_obj.getHours() < 12) ? set_phase.dataset.phase = "AM" : set_phase.dataset.phase = "PM";
}

setInterval(set_time);
