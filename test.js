//This file is for writing data structures etc


location:
arrive:
leave:
numNights:
address:
bookedThrough:
paid: "pending",
totalCost:
currency:


({
location: "New York",
arrive: "02/10/2016",
leave: "10/10/2016",
numNights: 8,
address: "Park Slopes",
bookedThrough: "Air BnB",
paid: "pending",
totalCost: 1180,
currency: "Aud"
})

({
location: "New York",
arrive: "26/10/2016",
leave: "30/10/2016",
numNights: 4
}
)

({
location: "New York",
arrive: "18/11/2016",
leave: "23/11/2016",
numNights: 5
}
)

({
location: "Montreal",
arrive: "10/10/2016",
leave: "14/10/2016",
numNights: 4
}
)

({
location: "Quebec",
arrive: "14/10/2016",
leave: "18/10/2016",
numNights: 4
}
)

({
location: "Montreal",
arrive: "18/10/2016",
leave: "19/10/2016",
numNights: 1
}
)

({
location: "White Top Mountain",
arrive: "19/10/2016",
leave: "20/10/2016",
numNights: 1
}
)

({
location: "Boston",
arrive: "20/10/2016",
leave: "26/10/2016",
numNights: 6
}
)

({
location: "South Amboy",
arrive: "26/10/2016",
leave: "3/11/2016",
numNights: 4
}
)

({
location: "Phillipsburg",
arrive: "3/11/2016",
leave: "5/11/2016",
numNights: 2,
address: "TBC",
bookedThrough: "Bernard",
paid: "pending",
totalCost: 0,
currency: "Aud"
}
)

({
location: "Poconos",
arrive: "5/11/2016",
leave: "7/11/2016",
numNights: 2,
address: "TBC",
bookedThrough: "",
paid: "pending",
totalCost: 0,
currency: "Aud"
}
)


(
 {
location: "Villa Nova",
arrive: "07/11/2016",
leave: "10/11/2016",
numNights: 3,
address: "TBC",
bookedThrough: "TBC",
paid: "pending",
totalCost: 0,
currency: "TBC"
}
)

(
 {
location: "Washington",
arrive: "10/11/2016",
leave: "18/11/2016",
numNights: 8,
address: "Billy Bartolene",
bookedThrough: "Bernard",
paid: "yes",
totalCost: 0,
currency: "Aud"
}
)


({
location: "South Amboy",
arrive: "23/11/2016",
leave: "25/11/2016",
numNights: 2,
address: "Bernard's mum",
bookedThrough: "Bernard",
paid: "pending",
totalCost: 0,
currency: "Aud"
}
)

({
location: "New York",
arrive: "25/11/2016",
leave: "26/11/2016",
numNights: 1,
address: "Park Slopes",
bookedThrough: "TBC",
paid: "pending",
totalCost: "TBC",
currency: "Aud"
})


db.stays.update({ location: "South Amboy"}, {$set: {bookedThrough: "Bernard", paid: "pending", totalCost: 0, currency: "Aud"}})
