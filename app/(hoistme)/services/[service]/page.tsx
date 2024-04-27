
import React from 'react'
import myServices from '../../myServices'


export async function generateStaticParams() {
  const services = myServices()
  return services.map((a) => ({
    service: a.url,
  }))
}


export default function Page({params}: any) {
  const { service } = params
  return (
    <div>{service}</div>
  )
}



