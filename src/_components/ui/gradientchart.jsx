"use client"

import React from "react"
import { Card, CardContent } from "@components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent} from "@components/ui/chart"
import { AreaChart, CartesianGrid, XAxis, Area } from "recharts"

import '@src/globals.css'

export default function Component() {
  const chartConfig = {
    projects: {
      label: "projects",
      color: "hsl(var(--chart-1))",
    }
  }
  const chartData = [
    { year: "", projects: 0},
    { year: "2016", projects: 4},
    { year: "2017", projects: 2},
    { year: "2018", projects: 3},
    { year: "2019", projects: 5},
    { year: "2020", projects: 6},
    { year: "2022", projects: 2},
    { year: "2023", projects: 5},
    { year: "2024", projects: 6},
    { year: "", projects: 0},

  ]
  return (
    <Card className="border-transparent bg-[#080c24]">
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[180px] w-full">
          <AreaChart data={chartData} margin={{left: 12, right: 12}}>
            <defs>
              <linearGradient id="fillprojects" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-projects)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-projects)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid horizontal={false} vertical={true} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 4)}
            />
            <ChartTooltip
              cursor={true}
              content={
                <ChartTooltipContent
                />
              }
            />
            <Area dataKey="projects" type="natural" fill="url(#fillprojects)" stroke="var(--color-projects)" fillOpacity={0.4} stackId="a" />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}