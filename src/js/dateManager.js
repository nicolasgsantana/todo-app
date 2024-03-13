import { format, parseISO, parse, compareAsc } from "date-fns";

export function formatDate(date) {
    return format(parseISO(date), "MMM d");
}

export function parseDate(date) {
    return parse(date, "dd-MM-y", new Date());
}

export function sortDates(dateList) {
    return dateList.toSorted(compareAsc);
}

export function formatToISO(date) {
    return format(date, "dd-MM-y");
}
