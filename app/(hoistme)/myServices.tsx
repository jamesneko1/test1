import React from "react"

export default function myServices(): any[] {
  let aaa: any[] = services

  aaa = aaa.map((item) => ({
    service: item.service,
    url: "/services/" + item.service.replaceAll(" ", "-"),
    description: item.description,
    short_description: item.short_description,
  }))

  return aaa
}

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
