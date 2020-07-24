import React, { useRef, useEffect } from 'react';
import { select, scaleTime, axisLeft, timeYear, timeFormat, min } from 'd3';
import { DarkLinenPaper } from '../layout/StyledLayoutComponents';

export interface Occupation {
  id: string;
  selected: boolean;
  title: string;
  category: keyof Category;
  tag: Array<keyof Tag>;
  start: Date;
  end: Date;
}

export interface LifeEvent {
  id: string;
  title: string;
  date: Date;
}

interface Category {
  Education: boolean;
  Work: boolean;
  Volunteer: boolean;
}

interface Tag {
  architect: boolean;
  landscaper: boolean;
  baker: boolean;
  coder: boolean;
  farmer: boolean;
  manager: boolean;
}
const dim = {
  width: 400,
  height: 800,
  marginLeft: 100,
  background: '#f6f3f0',
};

interface Props {
  width: number;
  height: number;
  occupations: Array<Occupation>;
  events: Array<LifeEvent>;
  background: string;
}

const TimeLine: React.FC<Props> = ({
  width,
  height,
  occupations,
  events,
  background,
}) => {
  const svgRef = useRef(null);

  const lookupInRange = (
    corner: Date,
    allValues: Array<Occupation>
  ): boolean => {
    let result: boolean = false;
    allValues.forEach((i) => {
      if (corner > i.start && corner < i.end) {
        result = true;
        return true;
      }
    });
    return result;
  };

  const categoryColor = (category: keyof Category) => {
    switch (category) {
      case 'Work':
        return '#CBE0F2';
      case 'Education':
        return '#EECEC9';
      case 'Volunteer':
        return '#F0E2CE';
    }
  };

  const orderInRange = (
    value: Occupation,
    backArg: any,
    midArg: any,
    frontArg: any
  ): boolean | number | string => {
    if (
      lookupInRange(value.end, occupations) &&
      lookupInRange(value.start, occupations)
    ) {
      return backArg;
    } else if (lookupInRange(value.start, occupations)) {
      return midArg;
    } else {
      return frontArg;
    }
  };

  useEffect(() => {
    const svg = select(svgRef.current);

    const yScale = scaleTime()
      .domain([
        min(occupations, (d) => d.start) || new Date('1988-04-18'),
        new Date(),
      ])
      .range([height, 0]);

    const yAxis = axisLeft<any>(yScale)
      .ticks(timeYear, 1)
      .tickFormat(timeFormat('%Y'));

    const Axis = svg.append('g');
    Axis.style('transform', `translateX(${dim.marginLeft}px)`).call(yAxis);

    const BackBoxes = svg
      .append('g')
      .selectAll('rect')
      .data(occupations.filter((d) => orderInRange(d, true, false, false)));
    BackBoxes.join('rect')
      .transition()
      .attr('x', 115)
      .attr('y', (value) => yScale(+value.end))
      .attr('width', 35)
      .attr('height', (value) => yScale(+value.start) - yScale(+value.end))
      .attr('fill', (value) =>
        value.selected ? categoryColor(value.category) : 'none'
      )
      .attr('stroke', (value) =>
        value.selected ? background : categoryColor(value.category)
      )
      .attr('stroke-width', '2px');

    const MidBoxes = svg
      .append('g')
      .selectAll('rect')
      .data(occupations.filter((d) => orderInRange(d, false, true, false)));
    MidBoxes.join('rect')
      .transition()
      .attr('x', 110)
      .attr('y', (value) => yScale(+value.end))
      .attr('width', 30)
      .attr('height', (value) => yScale(+value.start) - yScale(+value.end))
      .attr('fill', (value) =>
        value.selected ? categoryColor(value.category) : 'none'
      )
      .attr('stroke', (value) =>
        value.selected ? background : categoryColor(value.category)
      )
      .attr('stroke-width', '2px');

    const FrontBoxes = svg
      .append('g')
      .selectAll('rect')
      .data(occupations.filter((d) => orderInRange(d, false, false, true)));
    FrontBoxes.join('rect')
      .transition()
      .attr('x', 105)
      .attr('y', (value) => yScale(+value.end))
      .attr('width', 25)
      .attr('height', (value) => yScale(+value.start) - yScale(+value.end))
      .attr('fill', (value) =>
        value.selected ? categoryColor(value.category) : 'none'
      )
      .attr('stroke', (value) =>
        value.selected ? background : categoryColor(value.category)
      )
      .attr('stroke-width', '2px');

    const LifeEvents = svg.append('g').selectAll('line').data(events);
    LifeEvents.join('line')
      .transition()
      .attr('x1', 25)
      .attr('x2', width - 25)
      .attr('y1', (value) => yScale(value.date))
      .attr('y2', (value) => yScale(value.date))
      .attr('stroke', 'black')
      .attr('stroke-dasharray', '5,10,5');

    LifeEvents.join('text')
      .transition()
      .attr('x', 5)
      .attr('y', (value) => yScale(value.date) - 5)
      .text((value) => value.title)
      .attr('font-family', 'Josefin Sans, serif')
      .attr('font-size', '0.6em')
      .attr('fill', DarkLinenPaper);
  }, [occupations]);

  return (
    <div>
      <svg
        style={{ background, overflow: 'visible' }}
        width={width}
        height={height}
        ref={svgRef}
      />
    </div>
  );
};

export default TimeLine;