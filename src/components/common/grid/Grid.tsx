import React from 'react';

import GridProps from './GridProps';

const multipleAreSet = (...conditionals: any[]) =>
  conditionals.reduce(
    (prev: number, current: any) => (current ? prev + 1 : prev),
    0
  ) > 1;

const removeUndef = (obj: any): any => {
  Object.keys(obj).forEach(key => obj[key] === undefined && delete obj[key]);
  return obj;
};

const Grid = ({
  // General props
  children,
  style,
  // Container props
  container,
  templateColumns,
  templateRows,
  templateAreas,
  template,
  columnGap,
  rowGap,
  gap,
  autoColumns,
  autoRows,
  autoFlow,
  justifyItems,
  alignItems,
  justifyContent,
  alignContent,
  // Item props
  item,
  columnStart,
  columnEnd,
  rowStart,
  rowEnd,
  column,
  row,
  area,
  justifySelf,
  alignSelf,
}: GridProps): JSX.Element => {
  const gridStyle: React.CSSProperties = {};
  if (container === undefined && item === undefined) {
    container = true;
    item = false;
  }

  if (container) {
    if (
      multipleAreSet(templateColumns || templateRows, templateAreas, template)
    ) {
      console.warn(
        'A grid container should not use multiple templating methods!'
      );
    }

    Object.assign<React.CSSProperties, React.CSSProperties>(gridStyle, {
      display: container ? 'grid' : undefined,
      gridTemplateColumns: templateColumns,
      gridTemplateRows: templateRows,
      gridTemplateAreas: templateAreas
        ? templateAreas.map((a: string) => `"${a}"`).join(' ')
        : undefined,
      gridTemplate: template,
      gridColumnGap:
        typeof columnGap === 'number' ? `${columnGap}px` : columnGap,
      gridRowGap: typeof rowGap === 'number' ? `${rowGap}px` : rowGap,
      gridGap: typeof gap === 'number' ? `${gap}px ${gap}px` : gap,
      gridAutoColumns: autoColumns,
      gridAutoRows: autoRows,
      gridAutoFlow: autoFlow,
      justifyItems,
      alignItems,
      justifyContent,
      alignContent,
    });
  }
  if (item) {
    Object.assign<React.CSSProperties, React.CSSProperties>(gridStyle, {
      gridColumnStart: columnStart,
      gridColumnEnd: columnEnd,
      gridRowStart: rowStart,
      gridRowEnd: rowEnd,
      gridColumn: column,
      gridRow: row,
      gridArea: area,
      justifySelf,
      alignSelf,
    });
  }

  removeUndef(gridStyle);

  return <div style={Object.assign(gridStyle, style)}>{children || null}</div>;
};

export default Grid;
