export type Alignment =
  | 'start'
  | 'end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type Display = 'show' | 'hidden';

export type Overflow = 'block' | 'scroll' | 'wrap';

export type BorderRadius = {
  topLeft: number;
  topRight: number;
  bottomLeft: number;
  bottomRight: number;
};

export type Color = {
  light: string;
  dark: string;
};

export type Responsiviness<T> = {
  xs: T;
  sm: T;
  md: T;
  xl: T;
  xxl: T;
};

export type ResponsivnessLineOptions = {
  display: Display;
  align: Alignment;
  justify: Alignment;
  overflow: Overflow;
};

export type ResponsivinessContainerOptions = {
  width: string;
  height: string;
  display: Display;
  overflow: Overflow;
};

export type ResponsivinessTextOptions = {
  font: string;
  size: string;
};

export type ResponsivinessImageOptions = {
  width: string;
  height: string;
  blurLevel: number;
};

export type Row = {
  type: 'row';
  reponsiviness: Responsiviness<ResponsivnessLineOptions>;
  children: [];
};

export type Column = {
  type: 'column';
  reponsiviness: Responsiviness<ResponsivnessLineOptions>;
  children: [];
};

export type Container = {
  type: 'container';
  responsiviness: Responsiviness<ResponsivinessContainerOptions>;
  color: Color;
  child: Widget;
};

export type Text = {
  type: 'text';
  responsiviness: Responsiviness<ResponsivinessTextOptions>;
  color: Color;
  content: string;
};

export type Image = {
  fileId: string;
  responsiviness: Responsiviness<ResponsivinessImageOptions>;
  child: Widget;
};

export type Widget = Row | Column | Container | Text | Image;

export interface Session {
  id: string;
  user: string | null;
  elements: Widget[];
  createdAt: Date;
}
