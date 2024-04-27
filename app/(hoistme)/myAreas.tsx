import React from "react"

export default function myAreas(): any[] {
  let aaa: any[] = areas

  aaa = aaa.map((item) => ({
    area: item,
    url: "/service-areas/" + item.replaceAll(" ", "-"),
    // description: item.description,
    // short_description: item.short_description,
  }))

  return aaa
}

const areas = [
  "Tucson",
  "Phoenix",
  "Casa Grande",
  "Casa Adobes",
  "Sahuarita",
  "Florence",
]

const services = [
  {
    service: "Commercial Painting and Coatings",
    description: "1111",
    short_description: "1111",
    url: "/services/1111",
  },
  {
    service: "Industrial Painting and Coatings",
    description: "1111",
    short_description: "1111",
    url: "/services/1111",
  },
  {
    service: "Residential Painting and Coatings",
    description: "1111",
    short_description: "1111",
    url: "/services/1111",
  },
  {
    service: "Retail Painting and Coatings",
    description: "1111",
    short_description: "1111",
    url: "/services/1111",
  },
  {
    service: "Touch Ups",
    description: "1111",
    short_description: "1111",
    url: "/services/1111",
  },
]


