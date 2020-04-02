export default interface GridProps {
  // General
  children?: (React.ReactChildren | React.ReactChild)[] | React.ReactText;
  style?: React.CSSProperties;

  // Container
  container?: boolean;
  templateColumns?: string;
  templateRows?: string;
  templateAreas?: string[];
  template?: string;
  columnGap?: number | string;
  rowGap?: number | string;
  gap?: number | string;
  autoColumns?: string;
  autoRows?: string;
  autoFlow?: 'row' | 'column' | 'row dense' | 'column dense';
  justifyItems?: 'start' | 'end' | 'center' | 'stretch';
  alignItems?: 'start' | 'end' | 'center' | 'stretch';
  justifyContent?:
    | 'stretch'
    | 'center'
    | 'start'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignContent?:
    | 'stretch'
    | 'center'
    | 'start'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';

  // Item
  item?: boolean;
  columnStart?: string;
  columnEnd?: string;
  rowStart?: string;
  rowEnd?: string;
  column?: string;
  row?: string;
  area?: string;
  justifySelf?: 'start' | 'end' | 'center' | 'stretch';
  alignSelf?: 'start' | 'end' | 'center' | 'stretch';
}
