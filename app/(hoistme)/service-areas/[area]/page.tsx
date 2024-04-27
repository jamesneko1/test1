import myServices from '@/app/(hoistme)/myServices'
import React from 'react'
import myAreas from '../../myAreas'


export async function generateStaticParams() {
  const areas = myAreas()
  return areas.map((a) => ({
    area: a.url,
  }))
}


export default function Page({params}: any) {
  const { area } = params
  return (
    <div>{area}</div>
  )
}



