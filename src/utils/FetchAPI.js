const seededHoursGenerator = (date, hour) => ((date + hour) % 9 ) / 10;

const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        let result = [];
        for (let hour = 15; hour <= 23; hour++) {
            if(seededHoursGenerator(date, hour) < 0.5) result.push(hour + ':00');
            if(seededHoursGenerator(date, hour + 7) < 0.5) result.push(hour + ':30');
        }
        setTimeout(() => {
            if (date) resolve({ status: 200,  data: result });
            else reject({ status: 500, error: result });
        }, 500);
    });
}

const submitAPI = (formData) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if(formData) resolve({ status: 200, data: true })
        else reject({ status: 500, error: [] })
    }, 500);
})

export const api = {
    fetchAPI,
    submitAPI
}