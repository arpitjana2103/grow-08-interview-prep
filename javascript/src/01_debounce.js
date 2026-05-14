function debounce(fn, delay) {
    let timerId;

    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

const search = function (query) {
    console.log("Searching for: ", query);
};

const debouncedSearch = debounce(search, 300);

debouncedSearch("J");
debouncedSearch("Ja");
debouncedSearch("Jav");
debouncedSearch("Java");
debouncedSearch("Javas");
debouncedSearch("Javasc");
debouncedSearch("Javascr");
debouncedSearch("Javascri");
debouncedSearch("Javascrip");
debouncedSearch("Javascript");
