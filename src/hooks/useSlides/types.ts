export interface SlideObject {
  headers?: Array<string | undefined>;
  innerSlides?: SlideObject[];
  content?: string;
}