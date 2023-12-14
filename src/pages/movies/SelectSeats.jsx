import React, { useState } from "react";

export const SelectSeats = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const movie = {
    title: "Movie",
    screen: "4D",
    date: new Date(),
    language: "Hindi",
    type: "Action,Thriller",
    theatres: [
      {
        _id: "1",
        name: "Screen 1",
        location: "QFX Cinemas, Civil Mall, Kathmandu",
      },
      {
        _id: "2",
        name: "Screen 2",
        location: "QFX Cinemas, Civil Mall, Kathmandu",
      },
      {
        _id: "3",
        name: "Screen 3",
        location: "QFX Cinemas, Civil Mall, Kathmandu",
      },
    ],
  };

  const screen = {
    name: "Screen 1",
    location: "Civil Mall",
    timeslots: [
      {
        time: "10:00 AM",
        seats: [
          {
            type: "Platinum",
            price: "1000",
            rows: [
              {
                rowname: "F",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "E",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          //Gold
          {
            type: "Gold",
            price: "500",
            rows: [
              {
                rowname: "D",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "C",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          //Silver
          {
            type: "Silver",
            price: "300",
            rows: [
              {
                rowname: "B",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "A",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        time: "1:00 PM",
        seats: [
          {
            type: "Platinum",
            price: "1000",
            rows: [
              {
                rowname: "F",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "E",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          //Gold
          {
            type: "Gold",
            price: "500",
            rows: [
              {
                rowname: "D",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "C",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          //Silver
          {
            type: "Silver",
            price: "300",
            rows: [
              {
                rowname: "B",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "A",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        time: "4:00 PM",
        seats: [
          {
            type: "Platinum",
            price: "1000",
            rows: [
              {
                rowname: "F",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "E",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          //Gold
          {
            type: "Gold",
            price: "500",
            rows: [
              {
                rowname: "D",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "C",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          //Silver
          {
            type: "Silver",
            price: "300",
            rows: [
              {
                rowname: "B",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "A",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const [selectedTime, setSelectedTime] = useState(screen.timeslots[0]);

  const selectedSeatsHandle = (seat) => {
    console.log(seat);
    const isSelected = selectedSeats.find((s) => {
      return (
        s.row === seat.row && s.col === seat.col && s.seat_id === seat.seat_id
      );
    });
    if (isSelected) {
      setSelectedSeats(
        selectedSeats.filter((s) => {
          return s.seat_id !== seat.seat_id;
        })
      );
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const generateSeatLayout = () => {
    const x = screen.timeslots.findIndex((t) => t.time === selectedTime.time);

    return (
      <div>
        {screen.timeslots[x].seats.map((seatType, index) => (
          <div className="seat-type" key={index}>
            <h2>
              {seatType.type} - Rs. {seatType.price}
            </h2>
            <div className="seat-rows">
              {seatType.rows.map((row, rowIndex) => (
                <div className="seat-row" key={rowIndex}>
                  <p className="rowname">{row.rowname}</p>
                  <div className="seat-cols">
                    {row.cols.map((col, colIndex) => (
                      <div className="seat-col" key={colIndex}>
                        {col.seats.map((seat, seatIndex) => (
                          <div
                            key={seatIndex}
                            className={`${colIndex} asdfsdf`}
                          >
                            {seat.status === "available" && (
                              <span
                                // className="seat-available"
                                className={
                                  selectedSeats.find((s) => {
                                    return (
                                      s.row === row.rowname &&
                                      s.seat_id === seat.seat_id &&
                                      s.col === colIndex
                                    );
                                  })
                                    ? "seat-selected"
                                    : "seat-available"
                                }
                                onClick={() => {
                                  selectedSeatsHandle({
                                    row: row.rowname,
                                    col: colIndex,
                                    seat_id: seat.seat_id,
                                  });
                                }}
                              >
                                {seatIndex + 1}
                              </span>
                            )}
                            {seat.status === "not-available" && (
                              <span className="seat-unavailable">
                                {seatIndex + 1}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <br /> <br /> <br />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="selectseatpage">
      {movie && screen && (
        <div className="s1">
          <div className="head">
            <h1>
              {movie.title} - {screen?.name}
            </h1>
            <h3>{movie.genre}</h3>
          </div>
        </div>
      )}

      {screen && (
        <div className="selectseat">
          <div className="timecont">
            {screen.timeslots.map((item, i) => (
              <h3
                className={
                  selectedTime.time === item.time ? "time selected" : "time"
                }
                key={i}
                onClick={() => {
                  setSelectedTime(time);
                }}
              >
                {item.time}
              </h3>
            ))}
          </div>
          <div className="indicators">
            <div>
              <span className="seat-unavailable"></span>
              <p>Not available</p>
            </div>
            <div>
              <span className="seat-available"></span>
              <p>Available</p>
            </div>
            <div>
              <span className="seat-selected"></span>
              <p>Selected</p>
            </div>
          </div>

          {generateSeatLayout()}

          <div className="totalcont">
            <div className="total">
              <h2>Total</h2>
              <h3>Rs. 88998</h3>
            </div>

            <button className="theme_btn1 linkstylenone">Book Now</button>
          </div>
        </div>
      )}
    </div>
  );
};
