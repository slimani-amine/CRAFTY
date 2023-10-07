import React from "react";
import { ResponsivePie } from "@nivo/pie";

import { Box, useTheme } from "@mui/material";

const data = [
  {
    id: "React",
    label: "React",
    value: 272,
    color: "#D9B98E",
  },
  {
    id: "stylus",
    label: "stylus",
    value: 543,
    color: "#8C3A3A",
  },
  {
    id: "sass",
    label: "sass",
    value: 401,
    color: "#262401",
  },
  {
    id: "haskell",
    label: "haskell",
    value: 434,
    color: " #717323",
  },
  {
    id: "nue",
    label: "nue",
    value: 333,
    color: "#f2e0c9",
  },
];

const Pie = ({ isDashbord = false }) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDashbord ? "200px" : "75vh" }}>
      <ResponsivePie
        data={data}
        theme={{
          textColor: "#D9B98E",
          fontSize: 11,
          axis: {
            domain: {
              line: {
                stroke: "#D9B98E",
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: "#D9B98E",
              },
            },
            ticks: {
              line: {
                stroke: "#D9B98E",
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: "#D9B98E",
              },
            },
          },
          grid: {
            line: {
              stroke: "#D9B98E",
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: "#D9B98E",
              },
            },
            text: {
              fontSize: 11,
              fill: "#D9B98E",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: "#D9B98E",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: "#D9B98E",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: "#D9B98E",
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        margin={
          isDashbord
            ? { top: 10, right: 0, bottom: 10, left: 0 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        innerRadius={isDashbord ? 0.8 : 0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: "nivo" }}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={"#D9B98E"}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        enableArcLabels={isDashbord ? false : true}
        enableArcLinkLabels={isDashbord ? false : true}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#D9B98E",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#D9B98E",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
        legends={
          isDashbord
            ? []
            : [
                {
                  anchor: "bottom",
                  direction: "row",
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: "#D9B98E",
                  itemDirection: "left-to-right",
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: "circle",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: "#D9B98E",
                      },
                    },
                  ],
                },
              ]
        }
      />
    </Box>
  );
};

export default Pie;
